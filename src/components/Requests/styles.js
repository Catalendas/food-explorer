import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 26px;
        height: 22px;
    }

    > span {
        background-color: ${({ theme }) => theme.COLORS.TOMATO200};
        /* padding: 1rem 2rem; */
        border-radius: 50%;
        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 1.563rem;
        top: 3rem;
    }

    ${({ $isadmin }) => $isadmin && css`
        display: none;
    `}
`