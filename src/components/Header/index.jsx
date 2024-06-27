import { Container, Logo } from "./styles";

import { Button } from "../Button";
import { Search } from "../Search/Index";
import { Requests } from "../Requests"

import LogoImage from "../../assets/Logo.png"
import MenuLogo from "../../assets/Menu.svg"
import Close from "../../assets/Close.svg"
import Receipt from "../../assets/Receipt.svg"
import GoBack from "../../assets/goback.svg"

import { useNavHook } from "../../hook/navHook";
import { useAuth } from "../../hook/AuthHook";
import { USER_ROLES } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { useCartHook } from "../../hook/cartHook";

export function Header() {

    const { user, signOut } = useAuth()
    const { cart } = useCartHook()

    const navigate = useNavigate()

    const { isVisible, setIsVisible, cartIsVisible, cartSetIsVisible } = useNavHook()

    const toggleImageMenu = isVisible ? Close : MenuLogo

    function handleSignOut() {
        signOut()
    }

    return (
        <Container>
            <div>
                <button className={cartIsVisible ? "hidden" : undefined } onClick={() => setIsVisible(!isVisible)}>
                    <img src={toggleImageMenu} alt="Menu" />
                </button>

                <Logo className={isVisible ? "hidden" : undefined}>
                    <img src={LogoImage} alt="Logo"/>
                    <span className={user.role !== USER_ROLES.ADMIN ? "hidden" : undefined}>admin</span>
                </Logo>

                <Search />

                <div className={isVisible ? "hidden" : undefined} >
                    <Requests isAdmin={user.role == USER_ROLES.ADMIN} onClick={() => cartSetIsVisible(!cartIsVisible)}/>

                    {user.role == USER_ROLES.ADMIN ? (
                        <Button onClick={() => navigate("/new")}>
                            Novo Prato
                        </Button>
                    ) : (
                        <Button icon={!cartIsVisible ? Receipt : ""} onClick={() => cartSetIsVisible(!cartIsVisible)}>
                            {cartIsVisible ? (
                                <img src={Close} alt="close" />
                            ) : (
                                <p>Pedido ({cart.length})</p>
                            )}
                        </Button>
                    )}

                    {user.role == USER_ROLES.ADMIN && (
                        <Button onClick={() => navigate("/admin")}>
                            Cozinha
                        </Button>
                    )}

                    <button onClick={handleSignOut}>
                        <img src={GoBack} alt="go-back" />
                    </button>
                </div>
            </div>
            {/* <Menu isVisible={isVisible}/> */}
        </Container>
    )
}