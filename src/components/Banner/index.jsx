import BannerImage from "../../assets/banner.png"
import { Container } from "./styles"

export function Banner() {
    return (
        <Container>
            <img src={BannerImage} alt="Banner Image" />
            
            <div>
                <span>Sabores inigualáveis</span>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    )
}