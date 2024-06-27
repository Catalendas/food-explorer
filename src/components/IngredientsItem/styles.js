import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : `${theme.COLORS.LIGHT600}`};
    border: ${({ theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.LIGHT500}` : "none"};


    border-radius: 8px;

    padding: 8px 1rem ;

    > input {
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        border: none;
        color: ${({ theme, $isnew }) => $isnew ? `${theme.COLORS.LIGHT500}` : `${theme.COLORS.LIGHT100}`};
    }

    > button {
        border: none;
        background-color: transparent;

        > img {
            height: 8px;
            width: 8px;
        }
    }
`