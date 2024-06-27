import { createContext, useContext, useState } from "react";

export const navContext = createContext({})

function NavProvider({ children }) {

    const [isVisible, setIsVisible] = useState(false)
    const [cartIsVisible, cartSetIsVisible] = useState(false)

    return (
        <navContext.Provider value={{ isVisible, setIsVisible, cartIsVisible, cartSetIsVisible }}>
            { children }
        </navContext.Provider>
    )
}

function useNavHook() {
    const context = useContext(navContext)
    return context
}

export {NavProvider, useNavHook}