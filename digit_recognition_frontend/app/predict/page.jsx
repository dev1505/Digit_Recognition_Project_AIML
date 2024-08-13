"use client";
import React, { useState } from "react";
import Image_Upload_Component from "@/Components/Image_Upload_Component";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import StarIcon from '@mui/icons-material/Star';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function predict() {
  const [prediction, setPrediction] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handlePrediction = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    const response = await fetch("http://127.0.0.1:8000/hello", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <>
      <div
        className="
        h-screen
        pt-10
        bg-gradient-to-b from-slate-400 to-slate-700
        bg-cover
        bg-center
      "
      >
        <div
          className="
        border-2
      border-white
      rounded-md
      w-1/2
      mx-auto
      p-4
      mb-10
      text-center
      flex
      items-center
      justify-center
      bg-gray-300
      font-bold
      text-2xl
      text-blue-800
      "
        >
          Predict Handwritten Digits
        </div>
        <div
          className="
        flex ...
        flex-wrap-reverse
        border-2
        border-white
        rounded-md
        m-10
        "
        >
          <div
            className="
            flex-auto
            w-38
            justify-center
            items-center
            flex
            flex-col
            p-10
            gap-10
        "
          >
            <div
              className="
        "
            >
              <Image_Upload_Component onFileChange={handleFileChange} />
            </div>
            <div
              className="
          "
            >
              <button
                className="
            bg-blue-500
            text-white
            rounded-md
            p-2
            "
                onClick={handlePrediction}
              >
                Predict
              </button>
            </div>
          </div>

          <div
            className="
            flex
            flex-auto
            border-2
            border-white
            rounded-md
            m-10
            p-5
            gap-5
            flex-col
            w-62
            justify-around
            "
          >
            <div>
              <Alert severity="info">
                <AlertTitle>Note!!!</AlertTitle>
                <LooksOneIcon/>  This Prediction is based on the MNIST dataset and the model is
                trained on the MNIST dataset. So, the prediction may not be
                accurate for all the images.
                <br />
                <br />
                <LooksTwoIcon/>  Secondly this model is applicable for images with single digits
                only, so please upload images with single digits only.
              </Alert>
            </div>
            <div>
              <Alert severity="success">
                {prediction ? (
                  <div>
                    <AlertTitle>Prediction :--</AlertTitle>
                    <h1 className="text-lg font-style: italic">
                      <StarIcon/>  Your Image might contain <span className=" text-blue-800 text-xl font-bold
                      ">"{prediction}"</span> in the form of
                      handwritten digit.
                    </h1>
                  </div>
                ) : (
                  <div>
                    <AlertTitle>Prediction :--</AlertTitle>
                    <h1 className="text-lg font-style: italic">
                    <ArrowRightIcon/> No Prediction Yet, Upload an Image to Predict.
                    </h1>
                  </div>
                )}
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
