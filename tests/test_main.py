from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_api():
    response = client.get("/api")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello depuis FastAPI 👋"}

def test_frontpage():
    response = client.get("/")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]
