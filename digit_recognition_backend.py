import uvicorn
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from digit_recognition_function import digit_recognizer_function
from fastapi.middleware.cors import CORSMiddleware

class Data_From_Image(BaseModel):
    image_path: str


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/hello")
async def enter_image_fields(
    image: UploadFile = File(...),
):
    with open("image.png", "wb") as image_file:
        contents = await image.read()
        image_file.write(contents)
    prediction = digit_recognizer_function("image.png")
    return {"prediction": int(prediction)}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1:8000", port=8000)
