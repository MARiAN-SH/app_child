import React, { useState, useEffect, useRef, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import Player from "../Player";
import Abc from "../Letters";

// data
import { imgArray } from "../../data/imgData";
// Import styles
import { SliderWrapper, Img, ImgInfo } from "./Slider.styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
    const [activImg, setActivImg] = useState(0);
    const swiperRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [fullSkrin, setFullSkrin] = useState(false);
console.log(fullSkrin);

    const handleKeyDown = useCallback(
        (event) => {
            if (swiperInstance) {
                if (event.key === "ArrowRight") {
                    swiperInstance.slideNext();
                } else if (event.key === "ArrowLeft") {
                    swiperInstance.slidePrev();
                } else if (event.key === "d") {
                    // Use 'd' to disable Swiper
                    swiperInstance.disable();
                }
            }
        },
        [swiperInstance],
    );

    useEffect(() => {
        if (swiperRef.current && !swiperInstance) {
            setSwiperInstance(swiperRef.current.swiper);
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown, swiperInstance]);

    return (
        <Swiper
            onSlideChange={(e) => {
                setActivImg(e.activeIndex);
            }}
            ref={swiperRef}
            className="mySwiper"
            spaceBetween={30}
            effect={"fade"}
            keyboard={{ enabled: true, onlyInViewport: true }}
            modules={[EffectFade, Navigation, Pagination]}>
            {imgArray.map((x) => {
                return (
                    <SwiperSlide key={x.id}>
                        <SliderWrapper>
                            <Img $isfullskrin={fullSkrin}>
                                <img src={x.link} alt={x.name} />
                            </Img>
                            {activImg === x.id ? (
                                <ImgInfo $isfullskrin={fullSkrin}>
                                    <Abc
                                        nameImg={x.name}
                                        fullSkrin={fullSkrin}
                                    />

                                    <Player
                                        fullSkrin={fullSkrin}
                                        audioMp3={x.audio}
                                        id={x.id}
                                        activImg={activImg}
                                    />
                                    <button
                                        onClick={() =>
                                            setFullSkrin(!fullSkrin)
                                        }>
                                        {fullSkrin ? (
                                            <span>&#9660;</span>
                                        ) : (
                                            <span>&#9650;</span>
                                        )}
                                    </button>
                                </ImgInfo>
                            ) : (
                                <ImgInfo></ImgInfo>
                            )}
                        </SliderWrapper>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
export default Slider;
