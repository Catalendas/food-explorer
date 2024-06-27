import styled from "styled-components";

export const Container = styled.div`

    label {
        padding: 0.75rem 2rem;
        display: flex;
        align-items: center;
        gap: 8px;

        cursor: pointer;

        background-color: ${({ theme }) => theme.COLORS.DARK800 };

        border-radius: 8px;
    }

    input {
        display: none;
    }
`