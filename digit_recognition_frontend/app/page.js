"use client";
import React from "react";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-top bg-gradient-to-b from-slate-400 to-slate-700 px-20 py-10">
        <h1
          className="text-3xl font-bold text-center text-white 
        rounded-lg
        p-4
        bg-gradient-to-r from-slate-800 to-purple-300
        shadow-lg
        shadow-black/20
        "
        >
          Digit Recognition Using Tensorflow
        </h1>
        <div
          className="
        flex
        flex-wrap
        mt-10
        gap-10
        items-center
        justify-center
        "
        >
          <div>
            <Button
              variant="outlined"
              href="/predict"
              className="rounded-lg shadow-lg shadow-black/20 bg-white hover:bg-white
              hover:scale-110 transition-transform duration-200 ease-in-out
              px-5 py-3 text-md font-bold text-blue-800
              "
            >
              Predict Handwritten Digits  
              <span class="ml-3 relative flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
              </span>
              {/* <ArrowCircleRightIcon /> */}
            </Button>
          </div>
          <div>
            <img
              src="https://www.freecodecamp.org/news/content/images/2023/02/tensorflow.jpeg"
              alt="Tensorflow Image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://miro.medium.com/v2/resize:fit:2000/1*if0cRS4MVsCnKogzsS5W2g.jpeg"
              alt="Machine Learning"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://videocdn.geeksforgeeks.org/geeksforgeeks/DigitRecognitionusingConvolutionalNeuralNetworkCNNMNISTDataset/DigitRecognitionusingConvolutionalNeuralNetworksCNN20220328122624.jpg"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://partheniumprojects.com/wp-content/uploads/2019/01/Handwritten-digit-recognition.png"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://www.researchgate.net/publication/361444345/figure/fig5/AS:11431281091150131@1666326171450/Handwritten-digit-recognition-process.jpg"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://poweltalwar.wordpress.com/wp-content/uploads/2015/01/p11.png"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            bg-white
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://quintagroup.com/services/service-images/fastapi-advantages.jpg"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
          <div>
            <img
              src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
              alt="Handwritten digit image"
              className="
            h-[200px]
            w-[300px]
            rounded-lg
            shadow-lg
            shadow-black/20
            flex
            flex-col
            items-center
            justify-between
            hover:scale-125
            background-blend-mode: multiply;
            transition-transform
            duration-300
            ease-in-out
            hover:border-blue-500
            "
            />
          </div>
        </div>
      </div>
    </>
  );
}
