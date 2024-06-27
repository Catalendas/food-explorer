import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme, $variant }) => $variant ? theme.COLORS.DARK800 : theme.COLORS.TOMATO100};
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem 2rem;

    border: none;
    border-radius: 0.313rem;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO200};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO400};
        cursor: not-allowed;
    }
`