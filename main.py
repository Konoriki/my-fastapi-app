from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/api")
async def api_root():
    return {"message": "Hello depuis FastAPI 👋"}

@app.get("/")
async def serve_front():
    return FileResponse("static/index.html")
