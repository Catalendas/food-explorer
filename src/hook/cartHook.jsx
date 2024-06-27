import { createContext, useContext, useState } from "react";

const cartContext = createContext({})

function CartProvider({children}) {

    const [cart, setCart] = useState([])

    function request() {
        
    }

    return (
        <cartContext.Provider value={{ cart, setCart, request}}>
            {children}
        </cartContext.Provider>
    )
}

function useCartHook() {
    const context = useContext(cartContext)
    return context
}

export { CartProvider, useCartHook }

