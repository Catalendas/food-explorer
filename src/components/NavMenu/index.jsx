import { Search } from "../Search/Index";
import { Contianer, NavItem } from "./styles";
import SearchLogo from "../../assets/search.svg"
import { useEffect } from "react";
import { useAuth } from "../../hook/AuthHook";
import { USER_ROLES } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { useNavHook } from "../../hook/navHook";

export function NavMenu({ menuIsVisible }) {

    const { user, signOut } = useAuth()
    const { setIsVisible } = useNavHook()

    const navigate = useNavigate()

    function handleNewDish() {
        navigate("/new")
        setIsVisible(false)
    }

    function handleAdm() {
        navigate("/admin")
        setIsVisible(false)
    }

    function handleSignOut() {
        signOut()
        setIsVisible(false)
    }

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])

    return (
        <Contianer $isvisible={menuIsVisible}>

           <div>
                <Search icon={SearchLogo}/>

                <nav>
                    {user.role == USER_ROLES.ADMIN && (
                        <div>
                            <NavItem onClick={handleNewDish}>
                                Novo Prato
                            </NavItem>
                            <NavItem onClick={handleAdm}>
                                Conzinha
                            </NavItem>
                        </div>
                    )}
                    <NavItem onClick={handleSignOut}>
                        Sair
                    </NavItem>
                </nav>
           </div>
        </Contianer>
    )
}