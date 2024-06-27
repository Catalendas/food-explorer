import { Container } from "./styles";

import footerImg from "../../assets/footer-img.png"

export function Footer() {
    return (
        <Container>
            <div>
                <img src={footerImg} alt="Footer Image" />
                <span>© 2023 - Todos os direitos reservados.</span>
            </div>
        </Container>
    )
}