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
import { useCartHook } from "../../hook/cartHook";

export function Details() {

    const [dish, setDish] = useState({})
    const [quantity, setQuantity] = useState(1)

    const { setCart } = useCartHook()

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

    function plus() {
        setQuantity(quantity + 1)
    }

    function minus() {
        setQuantity(prevSatate => {
            if (prevSatate == 1) {
                 alert("Operação não permitida")
                 return prevSatate
            } else {
                return prevSatate - 1
            }
        })
    }

    function handleAddToCart() {
        setCart(prevState => [{
            image: dish.image, 
            title: dish.title,
            description: dish.description,
            price: dish.price , 
            id: dish.id, 
            quantity}, 
            ...prevState])
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
                            <Stepper quantity={quantity} plus={plus} minus={minus}/>

                            <Button icon={Receipt} onClick={handleAddToCart}>
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