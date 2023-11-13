"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import mainSlider from "@/app/data/mainSlide";
import SingleHeroSlider from "./SingleHeroSlider";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        loop
        navigation
        effect="fade"
        modules={[Navigation, EffectFade, Autoplay]}
        slidesPerView={1}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
