import uuid

import pytest

BASE_URL = "http://localhost:8001"


@pytest.fixture
def base_url():
    return BASE_URL


@pytest.fixture
def unique_suffix():
    return uuid.uuid4().hex[:10]


def valid_application_fields(suffix: str) -> dict:
    return {
        "role": f"tscheck-role-{suffix}",
        "full_name": f"tscheck Applicant {suffix}",
        "date_of_birth": "1995-05-15",
        "gender": "Male",
        "phone": "+911234567890",
        "email": f"tscheck-{suffix}@example.com",
        "qualification": "B.Tech Mechanical",
        "address": f"tscheck address line, plot {suffix}, City",
        "marital_status": "Single",
    }


PDF_BYTES = b"%PDF-1.4\n%tscheck valid resume content\n1 0 obj<<>>endobj\n%%EOF"
PNG_BYTES = bytes.fromhex(
    "89504e470d0a1a0a0000000d494844520000000100000001080600000"
    "01f15c4890000000a49444154789c6360000002000155e02e310000000049454e44ae426082"
)
