import styled from "styled-components";

export const Container = styled.div`

    height: calc(100vh - (4.813rem + 7.125rem));

    > div {
        display: flex;
        flex-direction: column;
        padding: 1rem 1.75rem;
        gap: 2rem;

        > div {
            display: flex;
            /* align-items: center; */
            flex-direction: column;
            gap: 1.5rem;

            > div:nth-child(2) {
                overflow-y: auto;
                display: flex;
                gap: 2rem;
            }
 
            > div:nth-child(4) {
                display: flex;
                gap: 1rem;

                > input {
                    display: none;
                }
            }
        }
    }
`

export const Label = styled.label`
    border: 1px solid ${({ theme, $radio }) => $radio ? theme.COLORS.CAKE100 : theme.COLORS.DARK900};
    padding: 1rem;
    border-radius: 10px;
                
`