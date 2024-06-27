import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.DARK700};
    height: 4.813rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: auto 0;

    > div {

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 1.75rem;

        width: 100%;

        > img {
            width: 8.875rem;
        }

        > span {
            font-size: 0.75rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > div {

            padding: 0 7.75rem;

            > img {
                width: 11.625rem;
                height: 1.875rem;
            }

            > span {
                font-size: 1.375rem;
            }
        }
    }
`