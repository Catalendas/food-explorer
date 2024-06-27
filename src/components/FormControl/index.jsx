import { Container } from "./styles";

export function FormControl({ children, label, id, ...rest}) {
    return (
        <Container {...rest}>
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}