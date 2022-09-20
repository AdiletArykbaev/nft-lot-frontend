import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./swiperSettings.css";
import nft1 from "../../../assets/images/nft-1.png";
import {Max768, Min769} from "../../../Utils/MediaQuiries";

const Slider = ({ sliderData }) => {
  return (
    <div className="swiper_parent">
        <Min769>
            <Swiper
                modules={[Navigation, Scrollbar]}
                spaceBetween={36}
                slidesPerView={4}
                navigation
                scrollbar={{ draggable: true }}
            >
                {sliderData &&
                sliderData.map((el) => (
                    <React.Fragment idx={el}>
                        <SwiperSlide>
                            <div className="swiper_box">
                                <img src={nft1} alt="" />
                            </div>
                        </SwiperSlide>
                    </React.Fragment>
                ))}
            </Swiper>
        </Min769>
        <Max768>
            <Swiper
                modules={[Navigation, Scrollbar]}
                spaceBetween={36}
                slidesPerView={2}
                navigation
                scrollbar={{ draggable: true }}
            >
                {sliderData &&
                sliderData.map((el) => (
                    <React.Fragment idx={el}>
                        <SwiperSlide>
                            <div className="swiper_box">
                                <img src={nft1} alt="" />
                            </div>
                        </SwiperSlide>
                    </React.Fragment>
                ))}
            </Swiper>
        </Max768>
    </div>
  );
};

export default Slider;
