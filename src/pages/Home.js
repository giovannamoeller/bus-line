import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Input } from "../components/Input";
import { Container } from "../components/Container";

function Home() {
    const navigate = useNavigate();
    function goToSelectLinePage() {
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
            <span className="important" onClick={goToSelectLinePage}>Continuar como convidado.</span>
            <span>Não tem login? Registre-se agora.</span>
        </Container>
    )
}

export default Home;