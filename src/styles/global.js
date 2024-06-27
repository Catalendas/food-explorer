import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 12px;
        
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 16PX;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK400};
        color: ${({ theme }) => theme.COLORS.LIGHT400};

        -webkit-font-smoothin:  antialiased;
    }
    
    body, input, button, textarea {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT100};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`