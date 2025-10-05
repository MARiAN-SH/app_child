import { useContext } from "react";
import { LanguageContext } from "../../App";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import { StyleLayout, StyleFooter } from "./Layout.styled";
function Layout() {
    const [language] = useContext(LanguageContext);

    return (
        <StyleLayout>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <StyleFooter
                style={{ marginTop: "40px", fontSize: "0.8em", color: "#666" }}>
                {language === "ua"
                    ? "Зроблено з ❤️ для Вікторії"
                    : language === "cz"
                    ? "Vytvořeno s ❤️ pro Viktorii"
                    : "Made with ❤️ for Viktoriya"}
            </StyleFooter>
        </StyleLayout>
    );
}

export default Layout;
