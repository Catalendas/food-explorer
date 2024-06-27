import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK800};

    padding: 8px;

    border-radius: 8px;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`