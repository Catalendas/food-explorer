import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details"; 
import { Layout } from "./layout";
import { NotFound } from "../pages/NotFound";
import { Checkout } from "../pages/Checkout";

export function CustomerRoutes() {
    return (
        <Routes>
            <Route
                element={<Layout/>}
            >
                <Route 
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/details/:id"
                    element={<Details />}
                />
                <Route 
                    path="/checkout"
                    element={<Checkout />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}