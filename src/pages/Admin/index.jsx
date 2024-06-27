import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Order } from "../../components/Order";
import { Back } from "../../components/Back";

export function Admin() {
    const [ data, setData ] = useState([])
    console.log(data)

    async function getRequests() {
        try {
            const response = await api.get("/request")

            setData(response.data)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel buscar os dados")
            }
        }
    }

    useEffect(() => {
        getRequests()
    }, [])

    return (
        <Container>

            <Back />

            <div>
                <span>Prato</span>
                <span>Quantidade</span>
                <span>Pessoa</span>
                <span>Metodo de pagamento</span>
                <span>Status</span>
            </div>
            <div>
                {data.map((item, i) => (
                    <Order 
                        key={i}
                        name={item.name}
                        title={item.title}
                        quantity={item.quantity}
                        payment_type={item.payment_type}
                        dish_status={item.dish_status}
                        id={item.id}
                    />
                ))}
            </div>
        </Container>
    )
}