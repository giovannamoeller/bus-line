import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { Container } from "./Container"
import Header from "./Header"

export default function Error() {
    const navigate = useNavigate()
    function returnToSelectBusLinePage() {
        navigate('/busLine')
    }
    return (
        <Container>
            <Header/>
            <h3>Erro! O ID desse ônibus passado na URL não foi encontrado. </h3>
            <Button onClick={returnToSelectBusLinePage}>Tente Novamente</Button>
        </Container>
    )
}