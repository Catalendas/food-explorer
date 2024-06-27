import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK800};

    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: .7rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1rem;
    }
`