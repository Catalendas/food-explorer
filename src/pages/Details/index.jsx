import { Container, Content, ProductInfo } from "./styles";

import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Button } from "../../components/Button";

import Receipt from "../../assets/Receipt.svg"
import SaladaMd from "../../assets/salada-ravanello-md.png"

import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hook/AuthHook";
import { USER_ROLES } from "../../utils/roles";
import { Back } from "../../components/Back";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";

export function Details() {

    const [dish, setDish] = useState({})
    const { id } = useParams()

    const navigate = useNavigate()

    const { user } = useAuth()

    async function getDish() {

        try {
            const response = await api.get(`/dish/${id}`)
            const [data] = response.data

            data.image = api.defaults.baseURL.concat(`/files/${data.image}`)
            // console.log(data)
            setDish(data)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel buscar o prato")
            }
        }
    }

    useEffect(() => {
        getDish()
    }, [])

    return (
        <Container> 
            <Back />
            <div>
                <img src={dish.image} alt={dish.title} />

                <Content>
                    <ProductInfo>
                        <span>{dish.title}</span>

                        <p>{dish.description}</p>

                        <div>
                            {dish.ingredients && dish.ingredients.map((e) => (
                                <Tag title={e.title} key={e.id}/>
                            ))}
                        </div>
                    </ProductInfo>

                    {user.role !== USER_ROLES.ADMIN ? (
                        <div>
                            <Stepper />

                            <Button icon={Receipt}>
                                Incluir . {formatPrice(dish.price)}
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button onClick={() => navigate(`/edit/${id}`)}>
                                Editar Prato
                            </Button>
                        </div>
                    )}
                </Content>
            </div>
        </Container>
    )
}