import { useState, useContext } from "react";
import { LanguageContext } from "../../App";

import { colors } from "../../data/colors";

import { BlockColors, ItemColor } from "./Colors.styled";

export default function Colors() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [language] = useContext(LanguageContext);

    const handleClick = (color) => {
        setSelectedColor(color);
        const utterance = new SpeechSynthesisUtterance(color.name[language]);
        speechSynthesis.speak(utterance);
    };

    return (
        <BlockColors>
            {colors.map((color) => (
                <ItemColor
                    key={color.hex}
                    onClick={() => handleClick(color)}
                    // styles
                    $isColor={color.hex}
                    $selectedColor={selectedColor}
                    $color={color}>
                    {color.name[language]}
                </ItemColor>
            ))}
        </BlockColors>
    );
}
