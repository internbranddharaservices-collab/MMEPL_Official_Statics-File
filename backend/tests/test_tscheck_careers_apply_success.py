import httpx

from .conftest import PDF_BYTES, PNG_BYTES, valid_application_fields


def test_career_application_submits_successfully(base_url, unique_suffix):
    fields = valid_application_fields(unique_suffix)
    files = {
        "resume": ("resume.pdf", PDF_BYTES, "application/pdf"),
        "photo": ("photo.png", PNG_BYTES, "image/png"),
    }
    resp = httpx.post(f"{base_url}/api/careers/apply", data=fields, files=files, timeout=30)

    assert resp.status_code == 201, f"POST /api/careers/apply -> {resp.status_code}: {resp.text[:300]}"
    body = resp.json()
    assert body["application_status"] == "received", body
    # SMTP is mocked/disabled per spec deviation - must not claim it sent an email.
    assert body["notification_status"] == "pending_configuration", body
    assert "id" in body and body["id"]
