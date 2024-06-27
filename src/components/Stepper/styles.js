import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.875rem;

    width: 6.25rem;
`

export const NumberItens = styled.span`
    background: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT300};

    width: 1rem;
`

export const Button = styled.button`
    background: none;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT100};

    display: flex;
    align-items: center;
    justify-content: center;
`