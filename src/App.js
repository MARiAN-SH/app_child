import { useState, createContext } from "react";

import Slider from "./components/Slider";

import Global from "./styles/global";

export const LanguageContext = createContext(null);

function App() {
    const [language, setLanguage] = useState("en");

    return (
        <LanguageContext value={[language, setLanguage]}>
            <Global />
            <Slider />
        </LanguageContext>
    );
}

export default App;
