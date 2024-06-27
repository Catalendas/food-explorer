import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`    
    padding: 1rem 3.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK800};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        > div:nth-child(7) {
            display: flex;
            gap: 2rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {

        > form {
            display: grid;
            align-items: center;
            grid-template-areas: 
                "image name name name category category"
                "tag tag tag tag tag price"
                "area area area area area area"
                ". . . . . button";
            /* grid-template-rows: ; */

        }

        .button {
            grid-area: button;
        }

        .image {
            grid-area: image;
        }
    
        .name {
            grid-area: name;
        }
    
        .category {
            grid-area: category;
        }
    
        .tag {
            grid-area: tag;
        }
    
        .price {
            grid-area: price;
        }
    
        .area {
            grid-area: area;
        }
    }

`