import styled from "styled-components";

export const InputComponent = styled.input`
    background-color: ${({ theme }) => theme.COLORS.DARK900};
    color: ${({ theme }) => theme.COLORS.LIGHT500};

    border: none;
    border-radius: 0.5rem;

    padding: 1rem 0.75rem;

    width: 100%;
`