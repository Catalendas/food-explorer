import { useState } from "react";
import { Option, Select } from "../Select";
import { Container } from "./styles";
import { api } from "../../services/api"

export function Order({ title, quantity, name, payment_type, dish_status, id}) {

    const [status, setStatus] = useState(dish_status)

    async function handleSelectStatusDish(e) {
        try {   
            await api.patch(`/request/${id}`, {
                dish_status: e
            })

            alert("Prato atualizado com sucesso")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel atualizar status")
            }
        }
    }

    return (
        <Container>
            <span>{title}</span>
            <span>{quantity}</span>
            <span>{name}</span>
            <span>{payment_type}</span>
            <Select name="" id="" default onChange={e => handleSelectStatusDish(e.target.value)}>
                <Option value="waiting" title="Esperando" isSelected={status === "waiting"}/>
                <Option value="preparing" title="Preparando" isSelected={status === "preparing"}/>
                <Option value="ready" title="Pronto" isSelected={status === "ready"}/>
            </Select>
            {/* <span>{dish_status}</span> */}
        </Container>
    )
}