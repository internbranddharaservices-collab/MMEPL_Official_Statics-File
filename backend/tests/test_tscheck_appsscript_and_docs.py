"""
Static-artifact checks for criteria that have no live server to hit over HTTP:
- The Google Apps Script mailer (google-apps-script/Code.gs) is not deployed yet
  (spec_deviations: appsScriptUrl is intentionally blank until the user supplies
  the real /exec URL), so there is no reachable endpoint for an httpx test.
- The cPanel/Workspace handoff docs are plain markdown with no runtime surface.

These are verified by reading the actual repository files that will ship to
Hostinger / Apps Script, and asserting the required behaviour/content is present.
"""
import re
from pathlib import Path

REPO_ROOT = Path("/app/MME-Private-Limited-2")
CODE_GS = REPO_ROOT / "google-apps-script" / "Code.gs"
SETUP_MD = REPO_ROOT / "google-apps-script" / "SETUP.md"
DEPLOY_MD = REPO_ROOT / "HOSTINGER_DEPLOYMENT.md"


def _read(path: Path) -> str:
    assert path.exists(), f"Expected file missing: {path}"
    return path.read_text(encoding="utf-8")


def test_apps_script_mailer_enforces_security_controls_and_no_storage():
    src = _read(CODE_GS)

    # origin / token / timestamp / honeypot / rate limit
    assert "ALLOWED_ORIGINS" in src and 'throw new Error("Origin rejected")' in src
    assert "PUBLIC_FORM_TOKEN" in src and 'throw new Error("Token rejected")' in src
    assert '"website"' in src or "data.website" in src  # honeypot field
    assert 'throw new Error("Spam rejected")' in src
    assert "submittedAt" in src and 'throw new Error("Expired request")' in src
    assert "rateLimit_" in src and 'throw new Error("Rate limit exceeded")' in src

    # file MIME + extension + magic-byte signature + size validation
    assert re.search(r"mimeTypes\.has\(mime\)", src)
    assert re.search(r"extensions\.has\(extension\)", src)
    assert "Invalid resume size" in src and "maxBytes" in src
    assert "0x25" in src and "0x50" in src and "0x44" in src and "0x46" in src  # %PDF signature bytes

    # sends exactly one internal email to Script Property RECIPIENT_EMAIL, no applicant auto-reply
    assert src.count("MailApp.sendEmail(") == 1
    assert 'getProperty("RECIPIENT_EMAIL")' in src
    assert "replyTo: validEmail_(data.email)" in src  # reply-to convenience, not a second send

    # no persistence: no Sheets/Drive/database writes anywhere in the script
    forbidden_apis = ["SpreadsheetApp", "DriveApp", "getSheetByName", "appendRow"]
    for api in forbidden_apis:
        assert api not in src, f"Unexpected storage API found in Code.gs: {api}"

    # postMessage callback response for the frontend hidden-iframe mailer
    assert "window.parent.postMessage(" in src
    assert 'source: "mmepl-form-mailer"' in src or "source: \"mmepl-form-mailer\"".replace('"', "'") in src or 'source":"mmepl-form-mailer"' in src


def test_google_apps_script_setup_doc_covers_full_workflow():
    doc = _read(SETUP_MD)
    for required in [
        "Script propert",
        "RECIPIENT_EMAIL",
        "ALLOWED_ORIGINS",
        "PUBLIC_FORM_TOKEN",
        "Deploy",
        "Web app",
        "/exec",
        "Verify before launch",
        "Alternatives",
    ]:
        assert required in doc, f"SETUP.md missing expected topic: {required}"


def test_hostinger_deployment_doc_covers_build_upload_and_future_updates():
    doc = _read(DEPLOY_MD)
    for required in [
        "yarn build",
        "public_html",
        ".htaccess",
        "form-config.js",
        "content.js",
        "images",
        "Script propert",
    ]:
        assert required in doc, f"HOSTINGER_DEPLOYMENT.md missing expected topic: {required}"
