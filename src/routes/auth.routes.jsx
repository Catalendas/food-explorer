import { Navigate, Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { useAuth } from "../hook/AuthHook";

export function AuthRoutes() {

    // const user = false
    const { user } = useAuth()

    return (
        <Routes>
            <Route
                path="/"
                element={<SignIn />}
            />
            <Route 
                path="/register"
                element={<SignUp />}
            />
            {!user && <Route path="*" element={<Navigate to="/" />}/>}
        </Routes>
    )
}