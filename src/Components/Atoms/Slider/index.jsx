import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import nft1 from "../../../assets/images/nft-1.png";
import { Navigation } from "swiper";
import { useSwiper } from "swiper/react";

const Slider = () => {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={nft1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <button
          onClick={() => {
            swiper.slideNext();
          }}
          className="swipe_next"
        >
          next
        </button>
      </div>
    </>
  );
};

export default Slider;
