import { useState, useEffect, useRef } from "react";

// import Language from "../Language";

import { Abc, WrittenLettersWrapper, Input } from "./Letters.styled";

// data
import { letters } from "../../data/letters";

function Letters({ nameImg, language, openKeyboard }) {
    const btnRef = useRef(null);

    const [keyPress, setKeyPress] = useState(0);
    const [selectedLetter, setSelectedLetter] = useState([]);

    const keySpase = 32;

    const addActiveKey = (e) => {
        setKeyPress(Number(e.target.id));

        if (keyPress !== keySpase) {
            setSelectedLetter((prevSelectedLetters) => {
                const newSelectedLetters = [...prevSelectedLetters];
                newSelectedLetters.push(e.target.innerText);
                return newSelectedLetters;
            });
        }
    };

    const resetActiveKey = () => {
        btnRef.current.blur();

        setKeyPress(0);
        setSelectedLetter((prevSelectedLetters) => {
            const newSelectedLetters = [...prevSelectedLetters];
            newSelectedLetters.pop();
            return newSelectedLetters;
        });
    };

    const handleKeyDown = (event) => {
        setKeyPress(event.keyCode);

        if (event.keyCode !== keySpase) {
            setSelectedLetter((prevSelectedLetters) => {
                const newSelectedLetters = [...prevSelectedLetters];

                if (event.key.length === 1) {
                    newSelectedLetters.push(event.key);
                }
                return newSelectedLetters;
            });
        }

        if (event.key === "Backspace") {
            setSelectedLetter((prevSelectedLetters) => {
                const newSelectedLetters = [...prevSelectedLetters];
                newSelectedLetters.pop();
                return newSelectedLetters;
            });
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [keyPress]);

    return (
        <>
            {selectedLetter.length >= 1 && openKeyboard ? (
                <WrittenLettersWrapper>
                    <Input
                        value={selectedLetter.join("")}
                        onChange={(e) => {
                            setSelectedLetter(e.target.value);
                        }}
                    />
                    <button onClick={resetActiveKey}>&#9668;</button>
                </WrittenLettersWrapper>
            ) : (
                <p style={{ paddingTop: "60px" }}>{nameImg}</p>
            )}
            {!openKeyboard ? (
                ""
            ) : (
                <Abc $isOpenKeyboard={openKeyboard}>
                    {letters
                        .filter((e) => e.name[language])
                        .map((e) =>
                            keyPress === e.keyCode[language] ? (
                                <button
                                    ref={btnRef}
                                    onClick={resetActiveKey}
                                    key={e.name[language]}
                                    style={{
                                        backgroundColor: "#008000b8",
                                        // cursor: selectedLetter ? "grab" : "pointer",
                                    }}>
                                    {e.name[language]}
                                </button>
                            ) : (
                                <button
                                    ref={btnRef}
                                    onClick={addActiveKey}
                                    key={e.name[language]}
                                    id={e.keyCode[language]}>
                                    {e.name[language]}
                                </button>
                            ),
                        )}
                </Abc>
            )}
        </>
    );
}

export default Letters;
