import { Container } from "./styles";

export function Ingredients({ children, ...rest}) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}
