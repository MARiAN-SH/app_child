import { useState, useContext } from "react";

import { LanguageContext } from "../../App";

import { Ul } from "./Language.styled";

const arrayLanguages = ["en", "cz", "ua"];

function Language({ className }) {
    const [language, setLanguage] = useContext(LanguageContext);
    const [openListLeng, setOpenListLeng] = useState(false);

    const btnSelectLanguage = (e) => {
        setLanguage(e.target.innerText);
        setOpenListLeng(false);
    };

    return (
        <>
            {openListLeng ? (
                <Ul>
                    {arrayLanguages.map((lang) => (
                        <li key={lang}>
                            <button onClick={btnSelectLanguage}>{lang}</button>
                        </li>
                    ))}
                </Ul>
            ) : (
                <button
                    className={className}
                    onClick={() => setOpenListLeng(true)}>
                    {language}
                </button>
            )}
        </>
    );
}

export default Language;
