import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    height: calc(100vh - (4.813rem + 7.125rem));
    padding: 1rem 1.75rem;

    > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.DARK700};
        padding: 1rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        border-radius: 10px;

        font-size: .7rem;
    }


    > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        max-height: rem;

        overflow-x: auto;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        
        > div:nth-child(2) {
            font-size: 1rem;
        }
    }
`