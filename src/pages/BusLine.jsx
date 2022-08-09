import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Container } from "../components/Container";
import { busLines } from "../data/busLines";
import Error from "../components/Error";

function BusLine() {
    const { id } = useParams();
    const busLine = busLines.find(line => ( line.value === Number(id) ));
    const navigate = useNavigate();

    function goToReportDelay() {
        navigate(`/report/${id}`)
    }

    function goToViewDelay() {
        navigate(`/view/${id}`)
    }

    if (!busLine) {
        return <Error/>
    } else {
        return (
            <Container>
                <Header/>
                <h2>{busLine.label}</h2>
                <Button onClick={goToReportDelay}>Informar um atraso</Button>
                <Button onClick={goToViewDelay} secondary={true}>Consultar atraso</Button>
            </Container>
        )
    }
}


export default BusLine;