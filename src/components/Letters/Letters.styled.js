import styled from "styled-components";

export const WrittenLettersWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   & p {
        display: block;
        width: 85%;
        overflow: hidden;
    }
   & button {
        padding: 10px;
    }
`;

export const Abc = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 10px;

    & button {
        width: ${(props) => (props.$isfullskrin ? "13vh" : "4.5vh")};
        height: ${(props) => (props.$isfullskrin ? "5vh" : "4.5vh")};

        font-size: 3.2vh;
        /* background-color: #04aa6d;  */
        /* padding: 15px 32px; */

        overflow: hidden;
    }
    @media screen and (min-width: 768px) {
        /* overflow-y: scroll; */
        gap: 15px;

        & button {
            width: 7vh;
            height: 7vh;
            font-size: 3.2vh;
        }
    }
`;
