import styled, { css } from "styled-components";

export const Contianer = styled.div`
    height: 100vh;
    position: absolute;
    z-index: 5;

    width: 100%;
    opacity: 0;
    pointer-events: none;

    transition: .5s;
    transform: translateX(-100%);

    background-color: ${({ theme }) => theme.COLORS.DARK400};
    padding: 2.25rem 1.75rem;

    > div {


        nav {
            margin-top: 2.25rem;
        }
    }

    ${({ $isvisible }) => $isvisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
    `}
`

export const NavItem = styled.div`
    font-size: 1.5rem;
    padding: 0.625rem 0;

    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK1000};
`