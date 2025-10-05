import { useContext } from "react";

import { LanguageContext } from "../App";

// import { Container, Box, BoxTitle, BoxText } from "../styles/HomeStyled";
export default function Home() {
    const [language] = useContext(LanguageContext);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
            <h1 style={{ textAlign: "center" }}>
                {language === "ua"
                    ? "Вивчення слів"
                    : language === "cz"
                    ? "Učení slov"
                    : "Word Learning"}
            </h1>
        </div>
    );
}
