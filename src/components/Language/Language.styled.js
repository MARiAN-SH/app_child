import styled from "styled-components";

export const Ul = styled.ul`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: aliceblue;
    li,
    button {
        width: inherit;
        padding: 15px;
        @media screen and (max-width: 768px) {
            padding: 10px;
        }
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const Img = styled.div`
    width: ${(props) => (props.$isfullskrin ? "0" : "inherit")};
    background-color: red;

    img {
        width: 100%;
        height: -webkit-fill-available;
    }

    @media screen and (max-width: 768px) {
        height: ${(props) => (props.$isfullskrin ? "0" : "50%")};
    }
`;

export const ImgInfo = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    & p {
        font-size: 60px;
    }

    @media screen and (max-width: 768px) {
        height: ${(props) => (props.$isfullskrin ? "100%" : "50%")};

        padding: 5px;

        & p {
            font-size: 30px;
        }
    }
`;
