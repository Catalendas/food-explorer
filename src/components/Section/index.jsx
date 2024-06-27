import { Container } from "./styles";

export function Section({children, title, ...rest}) {
    return (
        <Container {...rest}>
            <h3>{title}</h3>

            <div>
                {children}
            </div>
        </Container>
    )
}