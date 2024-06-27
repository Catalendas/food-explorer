import { Container } from "./styles"

import { Back } from "../../components/Back"
import { Input } from "../../components/Input"
import { FormControl } from "../../components/FormControl"
import { InputFile } from "../../components/InputFile"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"

import sendImgage from "../../assets/send.svg"
import { Option, Select } from "../../components/Select"
import { Ingredients } from "../../components/Ingredients/indext"
import { IngredientsItem } from "../../components/IngredientsItem"
import { useEffect, useState } from "react"
import { Form, useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"

export function New() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const [dishImage, setDishImage] = useState(null)

    function handleChangeFile(e) {
        const file = e.target.files[0]
        setDishImage(file)
    }

    async function handleRegisterDish() {
        if(!title || !category || price == 0 || !description || ingredients.length == 0 || !dishImage) {
            alert("Por favor preencha todos os campos")
            return
        }

        try {
            const uploadForm = new FormData()

            const dish = {
                title, 
                category,
                price,
                description,
                ingredients
            }

            uploadForm.append("file", dishImage)
            uploadForm.append("data", JSON.stringify(dish))

            console.log(uploadForm)
            
            await api.post("/dish", uploadForm, { withCredentials: true })

            alert("Prato cadastrado com sucesso.")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel cadastrar")
            }
        }
    }

    async function handelUpdatedDish() {
        if(!title || !category || price == 0 || !description || ingredients.length == 0) {
            alert("Por favor preencha todos os campos")
            return
        }

        try {  
            const uploadForm = new FormData()

            const dish = {
                title, 
                category,
                price,
                description,
                ingredients
            }

            if (dishImage) {
                uploadForm.append("file", dishImage)
            }

            uploadForm.append("data", JSON.stringify(dish))

            console.log(uploadForm)
            
            await api.put(`/dish/${id}`, uploadForm, { withCredentials: true })

            alert("Prato alterado com sucesso.")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel buscar os dados do prato")
            }
        }
    }

    async function handleDeleteDish() {
        try {
            await api.delete(`/dish/${id}`)

            alert("Prato deletado com sucesso")
            navigate("/")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel excluir o prato")
            }
        }
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter((i) => i !== deleted))
    }

    async function getDish() {
        try {
            const response = await api.get(`/dish/${id}`)
            const [dish] = response.data

            console.log(dish)
            
            setTitle(dish.title)
            setCategory(dish.category)
            setPrice(dish.price)
            setDescription(dish.description)
            setIngredients(dish.ingredients.map(e => e.title))
            
            
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel buscar os dados do prato")
            }
        }
    }

    useEffect(() => {
        if (id) {
            getDish()
        }
    }, [])

    return (
        <Container>
            <Back />

            <h2>Adicionar prato</h2>

            <form>
                <FormControl label="Imagem do prato" className="image">
                    <InputFile image={sendImgage} onChange={e => handleChangeFile(e)}/>
                </FormControl>

                <FormControl label="Nome" id="name" className="name">
                    <Input placeholder="Ex.: Salada Ceasar" id="name" value={title} onChange={e => setTitle(e.target.value)}/>
                </FormControl>

                <FormControl label="Categoria" id="category" className="category">
                    <Select name="" id="" onChange={e => setCategory(e.target.value)}>
                        <Option value="snack" title="Refeição"/>
                        <Option value="Dessert" title="Sobremesas"/>
                        <Option value="drink" title="Bebidas"/>
                    </Select>
                </FormControl>

                <FormControl label="Ingredientes" className="tag">
                    <Ingredients>

                        {ingredients && (
                            ingredients.map((e, index) => (
                                <IngredientsItem 
                                    value={e} 
                                    key={index}
                                    onclick={() => handleRemoveIngredient(e)}
                                />
                            ))
                        )}
                        
                        <IngredientsItem 
                            isNew={true} 
                            onclick={handleAddIngredient}
                            value={newIngredient}
                            placeholder="Adicionar"
                            onChange={(e) => setNewIngredient(e.target.value)}
                        />
                    </Ingredients>
                </FormControl>

                <FormControl label="Preço" id="price" className="price">
                    <Input placeholder="R$ 00,00" id="price" value={price} onChange={e => setPrice(e.target.value)}/>
                </FormControl>

                <FormControl label="Descrição" id="description" className="area">
                    <TextArea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={description} onChange={e => setDescription(e.target.value)}/>
                </FormControl>
                

                {!id ? (
                    <Button className="button" type="button" onClick={handleRegisterDish}>
                        Cadastrar Prato
                    </Button>
                ) : (
                    <div>
                        <Button className="button" type="button" variant={true} onClick={handleDeleteDish}>
                            Excluir Prato
                        </Button>

                        <Button className="button" type="button" onClick={handelUpdatedDish}>
                            Salvar Alterações
                        </Button>
                    </div>
                )}

            </form>


        </Container>
    )
}