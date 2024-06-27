import { Container } from "./styles";
import BackImage from "../../assets/Back.svg"
import { useNavigate } from "react-router-dom";

export function Back() {

    const navigate = useNavigate()

    return (
        <Container onClick={() => navigate(-1)}>
            <img src={BackImage} alt="Back" />
            Voltar
        </Container>
    )
}