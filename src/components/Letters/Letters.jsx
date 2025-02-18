import React, { useState, useEffect, useRef } from "react";

// data
import { letters } from "../../data/letters";

import { Abc, WrittenLettersWrapper } from "./Letters.styled";

function Letters({ nameImg, fullSkrin }) {
    const btnRef = useRef(null);
    // console.log(btnRef);

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

        // event.preventDefault();

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
            {selectedLetter.length >= 1 ? (
                <WrittenLettersWrapper>
                    <p style={{ color: "#008000b8" }}>
                        {selectedLetter.join("")}
                    </p>
                    <button onClick={resetActiveKey}>&#9668;</button>
                </WrittenLettersWrapper>
            ) : (
                <p>{nameImg}</p>
            )}
            <Abc $isfullskrin={fullSkrin}>
                {letters.map((e) =>
                    keyPress === e.keyCode ? (
                        <button
                            ref={btnRef}
                            onClick={resetActiveKey}
                            key={e.keyCode}
                            style={{
                                backgroundColor: "#008000b8",
                                // cursor: selectedLetter ? "grab" : "pointer",
                            }}>
                            {e.name}
                        </button>
                    ) : (
                        <button
                            ref={btnRef}
                            onClick={addActiveKey}
                            key={e.keyCode}
                            id={e.keyCode}>
                            {e.name}
                        </button>
                    ),
                )}
            </Abc>
        </>
    );
}

export default Letters;
