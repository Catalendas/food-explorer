import { useEffect, useState } from "react";
import { Container, Label } from "./styles";
import { Button } from "../../components/Button";
import { useCartHook } from "../../hook/cartHook";
import { CartItem } from "../../components/CartItem";
import { Back } from "../../components/Back"
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Checkout() {

    const [paymentType, setPaymentType] = useState("money")
    const [totalValue, setTotalValue] = useState(0)

    const { cart } = useCartHook()

    const navigate = useNavigate()

    function calculateTotalValue() {
        const value = cart.reduce((red, e) => {

            for(let i = 0; i < e.quantity; i++) {
                red += e.price
            }

            return red 
        }, 0)

        setTotalValue(value)
    }

    async function handleCheckout() {

        try {

            cart.forEach( async (e) => {
                await api.post("/request", {
                    dish_id: e.id,
                    payment_type: paymentType,
                    quantity: e.quantity
                })
            })

            alert("Prato(s) enviado(s) para a cozinha")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel buscar o prato")
            }
        }
    }

    useEffect(() => {
        calculateTotalValue()

        if (!cart.length) {
            navigate("/")
        }
    }, [cart])

    return (
        <Container>
            <div>
            <Back />
                <div>
                    <strong>Resumo do pedido</strong>

                    <div>
                        {cart.map((e, i) => (
                            <CartItem 
                                key={i}
                                image={e.image} 
                                index={i}
                                price={e.price}
                                title={e.title}
                                isCart={false}
                            />
                        ))}
                    </div>

                    <span>Valor total: {formatPrice(totalValue)}</span>

                    <div>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="money" 
                            id="money"
                        />
                        <Label htmlFor="money" $radio={paymentType === "money"} onClick={e => setPaymentType("money")}>Dinheiro</Label>
                        

                        <input 
                            type="radio" 
                            name="payment" 
                            value="card" 
                            id="card"
                        />
                        <Label htmlFor="card" $radio={paymentType === "card"} onClick={e => setPaymentType("card")}>Cartão</Label>

                        <input 
                            type="radio" 
                            name="payment" 
                            value="pix" 
                            id="pix"
                        />
                        <Label htmlFor="pix" $radio={paymentType === "pix"} onClick={e => setPaymentType("pix")}>Pix</Label>
                    </div>
                    <Button type="button" onClick={handleCheckout}>
                        Finaliar pedido 
                    </Button>
                </div>

            </div>
        </Container>
    )
}