import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK900};

    padding: 1rem 0.75rem;

    border-radius: 0.313rem;

    > input {
        background-color: transparent;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.LIGHT500};
        width: 21.5rem;
    }
`