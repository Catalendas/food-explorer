import styled, { css } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    width: 100%;
    height: 7.125rem;
    display: inline-block;

    background-color: ${({ theme }) => theme.COLORS.DARK700};

    > div {
        margin-top: 3.5rem;
        width: 100%;

        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        padding: 0 1.75rem;

        button:nth-child(1) {
            background-color: transparent;
            border: none;

            display: flex;
            align-items: center;
            justify-content: center;

            > img {
                height: 1.125rem;
            }
        }

        div:nth-child(3) {
            display: none;
        }

        div:nth-child(4) {  
            
            
            > button {
                display: none;
            }

        }

    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        align-items: center;

        > div {
            
            margin-top: 0;
            gap: 2rem;
            padding: 0 7.75rem;

            > button:nth-child(1) {
                display: none;
            }

            div:nth-child(3) {
                flex: 1;
                display: flex;
            }

            div:nth-child(4) {
                display: flex;
                align-items: center;
                gap: 2.25rem;

                > div {
                    img {
                    display: none;

                    }

                    span {
                        display: none;
                    }
                }

                > button {
                    display: flex;
                }

                > button:last-child {
                    background: transparent;
                    border: none;

                    > img {
                        display: block;
                        height: 22px;
                        width: 22px;
                    }
                }

            }
        }
    }

    .hidden {
        display: none !important; 
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    img {
        height: 1.625rem;

        @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
            height: 1.875rem;
        }
    }

    span {
        color: ${({ theme }) => theme.COLORS.CAKE200};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 12.313rem;
        flex-wrap: wrap;
        flex: none;
        justify-content: end;
    }
`

