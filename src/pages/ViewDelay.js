import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Container } from "../components/Container";
import { busLines } from "../data/busLines";
import Error from "../components/Error";
import { mockedReports } from "../data/reports";

function ViewDelay() {
    const { id } = useParams();
    const busLine = busLines.find(line => ( line.value === Number(id) ));
    const navigate = useNavigate();
    const reports = mockedReports.filter(report => report.line === Number(id))
    console.log(reports)

    function reload() {
        window.location.reload()
    }

    function goToLinePage() {
        navigate(`/busLine`)
    }

    if (!busLine) {
        return <Error/>
    } 
    
    if (reports.length === 0) {
        return (
            <Container>
                <Header/>
                <h3>Não foi encontrado nenhum registro de atraso para essa linha no momento.</h3>
                <Button onClick={reload}>Atualizar</Button>
                <Button onClick={goToLinePage} secondary={true}>Consultar uma nova linha</Button>
            </Container>
        )
    }

    return (
        <Container>
            <Header/>
            <h2>{busLine.label}</h2>
            {reports.map(report => {
                return (
                    <>
                        <span key={report.user}>O usuário '{report.user}' reportou o atraso desse ônibus em <strong>{report.delay} minutos</strong> às {report.time} na data {report.date}.</span>
                        <span>Localização do usuário: {report.location}</span>
                    </>
                )
            })}
            <Button onClick={reload}>Atualizar</Button>
            <Button onClick={goToLinePage} secondary={true}>Consultar uma nova linha</Button>
        </Container>
    )
}


export default ViewDelay;