import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const authContext = createContext({})

export function AuthProvider({ children }) {

    const [data, setData] = useState({})

    async function signIn({ email, password}) {

        try {
            const response = await api.post(
                "/session", 
                {email, password}
            )

            const { user } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

            setData({ user })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel se conectar")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@foodexplorer:user")

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")

        if (user) {
            setData({
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <authContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(authContext)
    return context
}