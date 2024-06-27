import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.DARK800};
    
    > img {
        width: 60px;
        height: 60px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;

            > span {
                font-size: .8rem;
            }
        }
    }

    > button {
        height: 15px;
        width: 15px;
        
        > img {
            height: 100%;
            width: 100%;
        }

        background-color: transparent;
        border: none;
        display: flex;
        justify-content: center;
        cursor: pointer;

    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > div {

            > div {
                gap: 1rem;
            }
        }
    }

`