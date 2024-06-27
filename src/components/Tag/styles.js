import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.DARK1000};

    padding: 0.25rem 0.5rem ;
    border-radius: 0.313rem;

    font-family: ${({ theme }) => theme.FONTS.POPPINS};
`