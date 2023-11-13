import React from "react";

const SingleHeroSlider = ({ slider = {} }) => {
  const { bg, title } = slider;
  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </>
  );
};

export default SingleHeroSlider;
