import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Home() {

    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    const navigate = useNavigate();
    
    function goToSelectLinePage() {
        login()
        navigate('/busLine')
    }

    function goToSelectLinePageWithoutLogin() {
        logout()
        navigate('/busLine')
    }

    return (
        <Container>
            <Header/>
            <span className="header-description">Ajude a melhorar a estimativa de atraso dos ônibus na cidade de Bauru. </span>
            <Input placeholder="Nome do Usuário"/>
            <Input placeholder="Senha" type="password"/>
            <Button onClick={goToSelectLinePage}>Entrar na minha conta</Button>
            <span>OU</span>
            <span className="important" onClick={goToSelectLinePageWithoutLogin}>Continuar como convidado.</span>
            <span>Não tem login? Registre-se agora.</span>
        </Container>
    )
}

export default Home;