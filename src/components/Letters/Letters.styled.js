import styled from "styled-components";

export const WrittenLettersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 60px;

    & p {
        display: block;
        width: 85%;
        overflow: hidden;
    }
    & button {
        padding: 10px;
    }
`;
export const Input = styled.input`
    width: 100%;
    padding: 0 15px;
    font-size: xxx-large;
    text-align: center;
    background-color: inherit;
    color: #008000b8;
    border: none;
`;

export const Abc = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 6px;

    & button {
        width: ${(props) => (props.$isOpenKeyboard ? "13vh" : "4.5vh")};
        height: ${(props) => (props.$isOpenKeyboard ? "5vh" : "4.5vh")};

        font-size: 4.2vh;
        /* background-color: #04aa6d;  */
        /* padding: 15px 32px; */

        overflow: hidden;
    }
    @media screen and (min-width: 768px) {
        /* overflow-y: scroll; */
        gap: 15px;

        & button {
            width: 12vh;
            height: 12vh;
            font-size: 3.2vh;
        }
    }
`;
