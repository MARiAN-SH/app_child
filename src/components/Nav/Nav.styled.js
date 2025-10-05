import styled from "styled-components";
import { Link } from "react-router-dom";

export const Hader = styled("nav")`
    display: flex;
    gap: 10px;
`;
export const StyleLink = styled(Link)`
    color: black;
    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;
