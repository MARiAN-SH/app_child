import styled from "styled-components";

import Language from "../Language";
import Player from "./Player";

export const BtnWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    @media screen and (max-width: 768px) {
        padding: 5px;
    }
`;
export const Btn = styled.button`
    width: 200px;
    height: 200px;
    background-color: ${({ $isOpenKeyboard }) =>
        $isOpenKeyboard ? "tomato" : "green"};
    border-radius: 50%;
    border-style: none;
    padding: 5px;
    @media screen and (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;

export const BtnPlayer = styled(Player)`
    display: ${({ $isOpenKeyboard }) => ($isOpenKeyboard ? "none" : "inline")};
    width: 200px;
    height: 200px;
    background-color: green;
    border-radius: 50%;
    border-style: none;
    padding: 5px;

    @media screen and (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;
export const BtnLanguage = styled(Language)`
    display: ${({ $isOpenKeyboard }) => ($isOpenKeyboard ? "none" : "inline")};
    width: 200px;
    height: 200px;
    background-color: green;
    border-radius: 50%;
    border-style: none;
    padding: 5px;

    @media screen and (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;
