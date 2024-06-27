import { Button, Container, NumberItens } from "./styles";
import Minus from "../../assets/Minus.svg"
import Plus from "../../assets/Plus.svg"
import { useState } from "react";

export function Stepper({quantity, plus, minus}) {
    return (
        <Container>
            <Button onClick={minus}>
                <img src={Minus} alt="Minus" />
            </Button>
            
            <NumberItens>
                {quantity}
            </NumberItens>

            <Button onClick={plus}>
                <img src={Plus} alt="Plus" />
            </Button>
        </Container>
    )
}