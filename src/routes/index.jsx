import { BrowserRouter } from "react-router-dom";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoutes } from "./auth.routes";
import { USER_ROLES } from "../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hook/AuthHook";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {

    const { user, signOut } = useAuth()
    
    useEffect(() => {
        api.get("/users/validated")
            .catch((err) => {
                if (err.response?.status === 401) {
                    signOut()
                }
            })
    }, [])

    function AcessRoutes() {
        switch(user.role) {
            case USER_ROLES.ADMIN:
                return <AdminRoutes />
            case USER_ROLES.CUSTOMER:
                return <CustomerRoutes />
            default:
                return <CustomerRoutes />
        }
    }


    return (
        <BrowserRouter>
            {user ? <AcessRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}