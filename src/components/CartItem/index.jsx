import { Container } from "./styles";
import Close from "../../assets/Close.svg"
import { Stepper } from "../Stepper";
import { formatPrice } from "../../utils/formatPrice"
import { useCartHook } from "../../hook/cartHook";
import { useEffect, useState } from "react";

export function CartItem({ isCart = true, image, title, price, index}) {

    const { cart, setCart } = useCartHook()
    
    function handleRemoveCart(index) {
        setCart(cart.filter((e, i) => index !==  i))
    }

    const [quantity, setQuantity] = useState(cart[index]?.quantity || 0)

    function plus() {
        setCart(prevSatate => {
            const updatedCart = prevSatate.map((item, i) => {
                if (i === index) {
                    return { ...item, quantity: item.quantity + 1}
                }

                return item
            })
            return updatedCart
        })
    }

    function minus() {
        setCart(prevSatate => {
            const updatedCart = prevSatate.map((item, i) => {
                if (i === index) {
                    if (item.quantity === 1) {
                        alert("Operação não permitida")
                        return item
                    }

                    return { ...item, quantity: item.quantity - 1}
                }

                return item
            })
            return updatedCart
        })
    }

    useEffect(() => {
        setQuantity(cart[index]?.quantity)
    }, [cart])

    return (
        <Container>
            <img src={image} alt={title} />

            <div>
                <span>{title}</span>
                <div>
                    <span>{formatPrice(price)}</span>
                    {isCart ? (
                        <Stepper quantity={quantity} minus={minus} plus={plus}/>
                        ) : (<span>Quantidade: {quantity}</span>)}
                </div>
            </div>  

            {isCart && (
                <button onClick={e => handleRemoveCart(index)}>
                    <img src={Close} alt="Close" />
                </button>  
            )}          

        </Container>
    )
}