import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    padding: 1rem 3.5rem;
    
    > div {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
            height: 264px;
        }
        
    }
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        height: calc(100vh - (4.813rem + 7.125rem));

        > span {
            margin-left: 14rem;
        }

        > div {
            flex-direction: row;
            gap: 3rem;

            > img {
                height: 389px;
            }

            
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(2) {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 43rem;
        align-items: start;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    margin-top: 1rem;

    > span {
        font-size: 1.75rem;
        font-weight: bold;
    }

    > p {
        text-align: center;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.75rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        align-items: start;

        > span {
            font-size: 2.5rem;
        }

        > p {
            text-align: left;
            font-size: 1.7rem;
        }
    }
`