import { Container } from "./styles";

export function Button({ children, icon, variant, ...rest}) {
    return (
        <Container {...rest} $variant={variant}>
            {icon && <img src={icon} alt="Icone"/>}
            {children}
        </Container>
    )
}