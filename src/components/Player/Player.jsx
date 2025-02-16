import React, { useState, useEffect, useRef, useCallback } from "react";
import { BtnWrapper, Btn } from "./Plater.styled";

export default function Player({ audioMp3, id, activImg, fullSkrin }) {
    const btnRef = useRef(null);
    const [keyPressCount, setKeyPressCount] = useState(0);

    const [audio] = useState(new Audio(audioMp3));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const handleTimeUpdate = useCallback(() => {
        setCurrentTime(audio.currentTime);
    }, [audio]);

    const handleEnded = useCallback(() => {
        audio.currentTime = 0;
        audio.play();
    }, [audio]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
            btnRef.current.blur();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const stopAudioOnChangSlid = useCallback(() => {
        if (audio.currentTime !== 0) {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [audio]);
    // ===================================================
    const handleKey = useCallback(
        (event) => {
            if (event.keyCode === 32) {
                if (activImg === id) {
                    audio.play();

                    setKeyPressCount((prevCount) => {
                        if (prevCount === 1) {
                            audio.pause();

                            return 0;
                        } else {
                            return prevCount + 1;
                        }
                    });
                }
                setIsPlaying(!isPlaying);
            }
        },
        [activImg, audio, id, isPlaying],
    );

    useEffect(() => {
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        document.addEventListener("keydown", handleKey);
        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);

            document.removeEventListener("keydown", handleKey);
            stopAudioOnChangSlid();
        };
    }, [audio, handleTimeUpdate, handleEnded, handleKey, stopAudioOnChangSlid]);

    return (
        <BtnWrapper>
            <Btn
                $isfullskrin={fullSkrin}
                ref={btnRef}
                onClick={togglePlayPause}>
                {isPlaying || keyPressCount
                    ? `${currentTime !== 0 ? currentTime.toFixed(2) : ""} Stop`
                    : "Listen"}
            </Btn>
            {/* <button onClick={(e) => console.log(e)}>+</button> */}
        </BtnWrapper>
    );
}
