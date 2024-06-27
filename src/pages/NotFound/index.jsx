import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NotFound() {
    return (
        <Container>
            <h1>Pagina não encontrada</h1>
            <Link to="/">Voltar para a pagina principal</Link>
        </Container>
    )
}