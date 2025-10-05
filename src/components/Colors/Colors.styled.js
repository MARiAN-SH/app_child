import styled from "styled-components";

// import { styled } from '@mui/system'

export const BlockColors = styled("div")`
    display: flex;
    max-width: 100%;
    height: 100dvh;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 60px 5px 10px;
`;
export const ItemColor = styled("div")`
    width: 250px;
    height: 250px;

    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    font-weight: bold;
    color: ${({ $isColor }) => ($isColor === "#FFFFFF" ? "black" : "#FFFFFF")};
    background-color: ${({ $isColor }) => $isColor};

    box-shadow: ${({ $selectedColor, $color }) =>
        $selectedColor?.hex === $color.hex ? "0 0 10px 3px #000" : "none"};

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
        font-size: 13px;
    }
`;
