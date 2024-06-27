import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`

    background-color: ${({ theme }) => theme.COLORS.DARK200};
    border:1px solid ${({ theme }) => theme.COLORS.DARK300} ;
    border-radius: 8px;

    width: 210px;
    height: 292px;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;

    > span:nth-child(3) {
        color: ${({ theme }) => theme.COLORS.CAKE200};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }

    > button {
        background: transparent;
        border: none;

        position: absolute;

        right: 18px;
        top: 16px;

    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        width: 19rem;
        height: 28.875rem;

        > img {
            width: 176px;
            height: 176px;
        }

        /* > span:nth-child(3) {
            font-weight: bold;
            font-size: 1.5rem;
        } */

        > span:nth-child(3) {
            font-size: 1.5rem;
        }

        > div {
            flex-direction: row;
        } 

    }
`

export const Info = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > img {
        width: 88px;
        height: 88px;
    }

    > p {
        text-align: center;
        /* display: inline; */
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) { 
        gap: 1.75rem;

        > img {
            width: 11rem;
            height: 11rem;
        }

        > span {
            font-weight: bold;
            font-size: 1.5rem;
        }
    }
`