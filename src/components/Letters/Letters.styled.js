import styled from "styled-components";

export const Abc = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 10px;

    & button {
        width: 4vh;
        height: 4vh;
        font-size: 3.2vh;

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
