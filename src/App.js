import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Slider from "./components/Slider";
import Colors from "./components/Colors";

export const LanguageContext = createContext(null);

function App() {
    const [language, setLanguage] = useState("ua");

    return (
        <Router>
            <LanguageContext.Provider value={[language, setLanguage]}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="animals" element={<Slider />} />
                        <Route path="colors" element={<Colors />} />
                    </Route>
                </Routes>
            </LanguageContext.Provider>
        </Router>
    );
}

export default App;
