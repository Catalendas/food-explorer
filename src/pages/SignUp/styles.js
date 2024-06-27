import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */

        width: 19.75rem;

        > img {
            /* width: 17.375rem;; */
            margin-bottom: 4.5rem;
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            > a {
                display: flex;
                justify-content: center;
            }

            > h2 {
                display: none;
                color: ${({ theme }) => theme.COLORS.LIGHT100};
            }
        }


    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        > div {
            flex-direction: row;
            /* justify-content: space-between; */
            
            gap: 18.75rem;
            align-items: center;
            width: 1106px;

            > img {
                width: 278px;
                height: 44px;
            }

            > div {

                background-color: ${({ theme }) => theme.COLORS.DARK700};
                padding: 4rem;
                border-radius: 1rem;
                width: 29.75rem;

                > h2 {
                    text-align: center;
                    display: block;
                }
            }
        }
    }
`