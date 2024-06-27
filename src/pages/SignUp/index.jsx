
import { Button } from "../../components/Button";
import { FormControl } from "../../components/FormControl";

import { Container } from "./styles";

import Logo from "../../assets/Logo.png"
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister() {
        if(!name || !email || !password) {
            alert("Preencha todos os campos")
            return 
        }

        await api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possivel cadastrar")
                }
            })
    }

    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo" />

                <div>

                    <h2>Criar sua conta</h2>

                    <FormControl label="Seu nome" id="name">
                        <Input type="text" id="name" placeholder="Exemplo: Maria da Silva" value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>

                    <FormControl label="Email" id="e-mail">
                        <Input type="email" id="e-mail" placeholder="Exemplo: exemplo@exemplo.com.br" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>

                    <FormControl label="Senha" id="password">
                        <Input type="password" id="password" placeholder="No mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>

                    <Button onClick={handleRegister}>
                        Criar conta
                    </Button>

                    <Link to="/">Já tenho uma conta</Link>
                </div>
            </div>
           
        </Container>
    )
}