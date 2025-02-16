import styled from "styled-components";

export const SliderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

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
        height: 50%;
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
        height: 50%;
        padding: 5px;

        & p {
            font-size: 30px;
        }
    }
`;
