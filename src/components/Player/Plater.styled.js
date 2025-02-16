import styled from "styled-components";

export const BtnWrapper = styled.div`
    @media screen and (max-width: 768px) {
    }
`;
export const Btn = styled.button`
    display: ${({ $isfullskrin }) => ($isfullskrin ? "none" : "inline")};
    width: 200px;
    height: 200px;
    background-color: tomato;
    border-radius: 50%;
    border-style: none;
    @media screen and (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;
