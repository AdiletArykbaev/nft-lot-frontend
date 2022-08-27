import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./swiperSettings.css";
import nft1 from "../../../assets/images/nft-1.png";

const Slider = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="swiper_parent">
            <Swiper
                modules={[Navigation, Scrollbar]}
                spaceBetween={36}
                slidesPerView={4}
                navigation
                scrollbar={{draggable: true}}
            >
                {arr.map((el) => (
                    <React.Fragment idx={el}>
                        <SwiperSlide>
                            <div className="swiper_box">
                                <img src={nft1} alt=""/>
                            </div>
                        </SwiperSlide>
                    </React.Fragment>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
