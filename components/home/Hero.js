import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-yellow-800 font-black leading-7 md:leading-10">
            Example title se! <br/>
            <span className="text-green-700">{" "}example sub title{" "}</span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-black font-normal text-center text-sm sm:text-lg">
          Sit impedit nemo rem autem saepe et assumenda impedit. Et repellat molestias est perspiciatis deleniti eos sint rerum est animi neque qui illo distinctio in accusamus consequatur et quia ducimus.
          </p>
        </div>
      </div>
    </div>
  );
}
