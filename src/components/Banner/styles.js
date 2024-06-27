import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    /* width: 23.5rem; */
    height: 7.5rem;
    background: linear-gradient(90deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%);
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    /* justify-content: center; */

    margin-top: 2.75rem;
    margin-right: 1rem;
    margin-left: 2.25rem;

    /* padding: 0 1.313rem 0 1.375rem; */

    img {
        width: 11.938rem;
        height: 9.313rem;
        position: relative;
        margin-left: -35px;
        margin-top: -22px;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 3px;
        /* width: 13.438rem; */

        span {
            /* font-size: 1.125rem; */
            font-weight: bold;
        }

        p {
            font-size: 0.75rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        height: 16.25rem;

        margin-top: 10.25rem;
        margin-right: 0;
        margin-left: 0;

        > div {
            span {
                font-size: 3rem;
            }

            p {
                font-size: 1rem;
            }
        }

        img {
            width: 41rem;
            height: 25.75rem;

            margin-left: -40px;
            margin-top: -93px;
        }
    }
`