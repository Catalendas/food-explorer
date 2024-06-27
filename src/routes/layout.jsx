import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavMenu } from "../components/NavMenu";
import { CartMenu } from "../components/CartMenu";
import { useNavHook } from "../hook/navHook";

export function Layout() {

    const { isVisible, cartIsVisible } = useNavHook()

    return (
        <div>
            <Header />

            <NavMenu menuIsVisible={isVisible} />
            <CartMenu menuIsVisible={cartIsVisible}/>

            <Outlet />

            <Footer />
        </div>
    )
}