import styled, { css } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Contianer = styled.div`
    height: 100vh;
    position: absolute;
    z-index: 6;
    
    width: 100%;
    opacity: 0;
    /* display: none; */
    pointer-events: none;

    transition: .5s;
    transform: translateX(-100%);

    background-color: ${({ theme }) => theme.COLORS.DARK400};
    padding: 2.25rem 1.75rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        gap: 1rem;
        max-height: 70%;
        overflow-x: auto;
    }

    ${({ $isvisible }) => $isvisible && css`
        opacity: 1;
        pointer-events: auto;
        /* display: block; */
        transform: translateX(0);
    `}

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 30%;
    }
`

