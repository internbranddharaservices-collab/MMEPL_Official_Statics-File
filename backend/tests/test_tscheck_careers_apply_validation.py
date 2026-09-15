import httpx

from .conftest import PDF_BYTES, valid_application_fields


def test_career_application_missing_resume_is_rejected(base_url, unique_suffix):
    fields = valid_application_fields(unique_suffix)
    resp = httpx.post(f"{base_url}/api/careers/apply", data=fields, timeout=30)
    assert resp.status_code in (400, 422), (
        f"expected rejection for missing resume, got {resp.status_code}: {resp.text[:300]}"
    )
    assert "application_status" not in resp.text or resp.status_code != 201


def test_career_application_invalid_email_is_rejected(base_url, unique_suffix):
    fields = valid_application_fields(unique_suffix)
    fields["email"] = "not-an-email"
    files = {"resume": ("resume.pdf", PDF_BYTES, "application/pdf")}
    resp = httpx.post(f"{base_url}/api/careers/apply", data=fields, files=files, timeout=30)
    assert resp.status_code in (400, 422), (
        f"expected rejection for invalid email, got {resp.status_code}: {resp.text[:300]}"
    )
