import React from "react";
import { BtnWrapper, Btn, BtnPlayer } from "./Buttons.styled";
function Buttons({ audioMp3, id, activImg, openKeyboard, fn }) {
    return (
        <BtnWrapper>
            <BtnPlayer
                $isOpenKeyboard={openKeyboard}
                audioMp3={audioMp3}
                id={id}
                activImg={activImg}
            />

            {/* {write && <Btn $isOpenKeyboard={openKeyboard}>&#9668;</Btn>} */}

            <Btn $isOpenKeyboard={openKeyboard} onClick={fn}>
                {!openKeyboard ? "Клава відкрити" : "Клава закрити"}
            </Btn>
        </BtnWrapper>
    );
}
export default Buttons;
