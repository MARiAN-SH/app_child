import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Buttons from "../Buttons";
import Letters from "../Letters";

// data
import { LanguageContext } from "../../App";
import { imgArray } from "../../data/imgData";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Import styles
import { SliderWrapper, Img, ImgInfo } from "./Slider.styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
    const [language] = React.useContext(LanguageContext);

    const [activImg, setActivImg] = React.useState(0);

    const swiperRef = React.useRef(null);
    const [swiperInstance, setSwiperInstance] = React.useState(null);
    const [openKeyboard, setOpenKeyboard] = React.useState(false);

    const handleKeyDown = React.useCallback(
        (event) => {
            if (swiperInstance) {
                if (event.key === "ArrowRight") {
                    swiperInstance.slideNext();
                } else if (event.key === "ArrowLeft") {
                    swiperInstance.slidePrev();
                }
                // else if (event.key === "d") {
                //     // Use 'd' to disable Swiper
                //     swiperInstance.disable();
                // }
            }
            if (!openKeyboard && event.key === "ArrowUp") {
                setOpenKeyboard(!openKeyboard);
            } else if (openKeyboard && event.key === "ArrowDown") {
                setOpenKeyboard(!openKeyboard);
            }
        },
        [swiperInstance, openKeyboard],
    );

    React.useEffect(() => {
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
                            <Img $isOpenKeyboard={openKeyboard}>
                                <img src={x.link} alt={x.name[language]} />
                            </Img>

                            {activImg === x.id ? (
                                <>
                                    <ImgInfo $isOpenKeyboard={openKeyboard}>
                                        <Letters
                                            nameImg={x.name[language]}
                                            openKeyboard={openKeyboard}
                                            language={language}
                                        />

                                        <Buttons
                                            openKeyboard={openKeyboard}
                                            // Player
                                            audioMp3={x.audio}
                                            id={x.id}
                                            activImg={activImg}
                                            // Open key
                                            fn={() =>
                                                setOpenKeyboard(!openKeyboard)
                                            }
                                        />
                                    </ImgInfo>
                                </>
                            ) : (
                                <ImgInfo />
                            )}
                        </SliderWrapper>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
export default Slider;
