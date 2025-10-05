import styled from "styled-components";

export const HeaderStyle = styled("header")`
    position: absolute;
    top: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    z-index: 50;
    background-color: transparent;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: green;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
`;
