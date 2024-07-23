"use client";
import React, { useState, forwardRef } from "react";
import Image from "next/image";

export default function Image_Upload_Component({ onFileChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file_name, setFile_name] = useState(null);
  const [text, setText] = useState("Upload Image Here");

  const handleFileChange = (e) => {
    // e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setText("Image Uploaded Successfully!");
    }
    onFileChange(file);
    setFile_name(file.name);
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="h-[300px] w-[300px] rounded-lg shadow-lg shadow-black/20 flex flex-col items-center justify-between p-4 gap-2 bg-blue-50">
        <div>
          <h1
            className="text-md font-bold text-blue-800
          animate-pulse 
        "
          >
            {text}
          </h1>
        </div>
        <div
          className="flex-1 w-full border-2 border-dashed border-blue-500 rounded-lg flex flex-col items-center justify-center gap-2 bg-gray-200
      "
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Image"
              className="h-[170px] w-[240px] rounded-lg"
            />
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[100px]"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <p className="text-black text-center">Browse File to upload!</p>
            </>
          )}
        </div>
        <input
          id="file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file"
          className="bg-blue-50 w-full h-[40px] px-2 rounded-lg cursor-pointer flex items-center justify-end text-black border-none"
        >
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[100%] fill-blue-500 bg-gray-200 rounded-full p-1 cursor-pointer shadow-md shadow-black/20
          border-2 border-opacity-50 
            hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:border-blue-500
          "
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
              <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
            </g>
          </svg>
          {selectedImage ? (
            // File name display
            <p className="flex-1 text-center">
              {file_name.length > 15
                ? file_name.slice(0, 15) + "..."
                : file_name}
            </p>
          ) : (
            <p className="flex-1 text-center">Not selected file</p>
          )}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[100%] 
           bg-gray-200 rounded-full p-1 cursor-pointer shadow-md shadow-black/20
          border-2 border-opacity-50
            hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:border-red-500"
            onClick={(e) => {
              e.preventDefault();
              setSelectedImage(null);
              setFile_name(null);
              setText("Upload Image Here");
              // reload the webpage
              alert("File removed successfully!");
              window.location.reload();
            }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                stroke="#000000"
                strokeWidth="2"
              ></path>
              <path
                d="M19.5 5H4.5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                stroke="#000000"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
        </label>
      </div>
    </>
  );
}
