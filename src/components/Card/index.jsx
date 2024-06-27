import Image from "../../assets/salada-ravanello-sm.png"
import Heart from "../../assets/Heart.svg"
import Pencil from "../../assets/Pencil.svg"
import HeartFill from "../../assets/Heart-fill.svg"

import { Stepper } from "../Stepper";
import { Button } from "../Button";
import { Container, Info } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hook/AuthHook";
import { Link, useNavigate } from "react-router-dom";
import { USER_ROLES } from "../../utils/roles";
import { formatPrice } from "../../utils/formatPrice";
import { useCartHook } from "../../hook/cartHook";
import { api } from "../../services/api";


export function Card({ image, title, description, price, id }) {

    const navigate = useNavigate()

    const { user } = useAuth()
    const { setCart, cart } = useCartHook()

    const [isFavorite, setIsFavorite] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const toggleHart = isFavorite ? HeartFill : Heart

    const imageDish = api.defaults.baseURL.concat(`/files/${image}`)

    function handleAddToCart() {
        setCart(prevState => [{image, title, description, price , id, quantity}, ...prevState])
    } 

    function plus() {
        setQuantity(quantity + 1)
    }

    function minus() {
        setQuantity(prevSatate => {
            if (prevSatate == 1) {
                 alert("Operação não permitida")
                 return prevSatate
            } else {
                return prevSatate - 1
            }
        })
    }

    return (
        <Container to={`/details/${id}`}>
            {user.role == USER_ROLES.ADMIN ? (
                <button onClick={() => navigate(`/edit/${id}`)}>
                    <img src={Pencil} alt="Pencil" />
                </button>
            ): (
                <button onClick={() => setIsFavorite(!isFavorite)}>
                    <img src={toggleHart} alt="Heart" />
                </button>
            )}

            <Info to={`/details/${id}`}>
                <img src={imageDish} alt="Dish" />

                <span>{title}</span>

                <p>{description}</p>
            </Info>

            <span>{formatPrice(price)}</span>

            {user.role !== USER_ROLES.ADMIN && (
                <div>
                    <Stepper quantity={quantity} plus={plus} minus={minus}/>

                    <Button type="button" onClick={handleAddToCart}>
                        Incluir
                    </Button>
                </div>
            )}
        </Container>
    )
}