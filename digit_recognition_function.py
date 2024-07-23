import cv2
import numpy as np
import joblib
from PIL import Image

model = joblib.load("digit_recognizer.joblib")


def detect_and_invert(image):
    _, binary = cv2.threshold(image, 200, 255, cv2.THRESH_BINARY)
    white_pixel_count = cv2.countNonZero(binary)
    threshold_value = 0.1 * binary.size
    if white_pixel_count > threshold_value:
        inverted_image = np.invert(np.array([image]))
        return inverted_image
    else:
        return np.array([image])


def digit_recognizer_function(img_path):
    img = Image.open(img_path)
    img = img.resize((28, 28))
    img = img.convert("L")
    img = np.array(img)
    img = detect_and_invert(img)
    prediction = model.predict(img)
    return np.argmax(prediction)
