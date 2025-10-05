import { useContext } from "react";

import { LanguageContext } from "../../App";
import Nav from "../Nav";

import { HeaderStyle } from "./Header.styled";

export default function Header() {
    const [language, setLanguage] = useContext(LanguageContext);
    return (
        <HeaderStyle>
            <Nav />
            {/* Language Switcher */}
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="ua">Українська</option>
                <option value="cz">Čeština</option>
            </select>
        </HeaderStyle>
    );
}
