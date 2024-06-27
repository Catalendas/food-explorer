import { Container } from "./styles";
import Receipt from "../../assets/Receipt.svg"
import Close from "../../assets/Close.svg"
import { useNavHook } from "../../hook/navHook";
import { useCartHook } from "../../hook/cartHook";

export function Requests({ isAdmin, ...rest }) {

    const { cartIsVisible } = useNavHook()
    const { cart } = useCartHook()

    const toggleCartMenu = cartIsVisible ? Close : Receipt

    return (
        <Container $isadmin={isAdmin} {...rest}>
            <img src={toggleCartMenu} alt="icon" />
            {!cartIsVisible && <span>{cart.length}</span>}
        </Container>
    )
}