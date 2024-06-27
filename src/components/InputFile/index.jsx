import { Container } from "./styles";

export function InputFile({ image, ...rest }) {
    return (
        <Container>
            <label htmlFor="image"><img src={image} alt="Send" /> Selecionar imagem</label>
            <input type="file" id="image" {...rest}/>
        </Container>
    )
}   