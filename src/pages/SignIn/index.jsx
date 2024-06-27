
import { Button } from "../../components/Button";
import { FormControl } from "../../components/FormControl";

import { Container } from "./styles";

import Logo from "../../assets/Logo.png"
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hook/AuthHook";

export function SignIn() {

    const { signIn } = useAuth()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSignIn() {
        await signIn({email, password})
    }

    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo" />

                <div>

                    <h2>Faça login</h2>

                    <FormControl label="Email" id="e-mail">
                        <Input 
                            type="text" 
                            id="e-mail" 
                            placeholder="Exemplo: exemplo@exemplo.com.br" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl label="Senha" id="password">
                        <Input 
                            type="password" 
                            id="password" 
                            placeholder="No mínimo 6 caracteres"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button onClick={handleSignIn}>
                        Entrar
                    </Button>

                    <Link to="/register">
                        Criar uma conta
                    </Link>
                </div>
            </div>
           
        </Container>
    )
}