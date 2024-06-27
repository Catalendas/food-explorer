import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - (4.813rem + 7.125rem));
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > a {
        color: ${({ theme }) => theme.COLORS.CAKE200};
        cursor: pointer;
    }
`