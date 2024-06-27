import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`

    .hidden {
        display: none;
    }
`

export const Content = styled.div`
    
    > div:nth-child(2) {

        margin-top: 62px;
        margin-bottom: 25px;
        padding-left: 1.5rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        padding: 0 7.75rem;
    }
`