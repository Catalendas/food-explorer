import styled from "styled-components";

export const TextAreaComponent = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.DARK800};
    color: ${({ theme }) => theme.COLORS.LIGHT500};

    border: none;
    border-radius: 8px;
    resize: none;
    height: 10.75rem;

    padding: 14px;
`