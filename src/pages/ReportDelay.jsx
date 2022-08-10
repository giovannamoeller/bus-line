import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { busLines } from "../data/busLines";
import { UserContext } from "../context/UserContext";
import { mockedReports } from "../data/mockedReports";

function ReportDelay() {

    const key = 'AIzaSyBAnlbVm4ao9vQiW8JLCCbKsNHmuzlFfMc'
    const navigate = useNavigate();

    const { isLoggedIn, username } = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(false);
    const [address, setAddress] = useState();
    const [error, setError] = useState(false);
    const [delay, setDelay] = useState(false);
    const { id } = useParams();
    const busLine = busLines.find(line => ( line.value === Number(id) ));

    function tryAgain() {
        navigate('/')
    }

    function changeDelayValue(value) {
        setDelay(value)
    }

    function sendDelay() {
        mockedReports.push({
            user: username,
            line: Number(id),
            location: address,
            delay,
            time: new Date().toLocaleTimeString(),
            date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        })
        alert('Atraso reportado com sucesso!')
        navigate(`/bus/${id}`)
    }

    function getLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
            requestToGoogleMapAPI(position.coords.latitude, position.coords.longitude)
            setIsLoading(false)
          });
    }

    function requestToGoogleMapAPI(lat, long) {
        console.log(lat, long)
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`
        fetch(url).then(response => response.json()).then(data => {
            const address = data.results[0].formatted_address
            setAddress(address)
        })
    }

    useEffect(() => {
        if (isLoggedIn) {
            if (navigator.geolocation) {
                setIsLoading(true)
                setError(false)
                getLocation()
            } else { 
                setError(true)
            }
        }
    }, []);

    if (isLoading) {
        return (
            <Container>
                <Header/>
                <h3>Carregando informações de localização...</h3>
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <Header/>
                <h3>Não foi possível obter informações sobre sua localização no momento.</h3>
                <Button onClick={getLocation}>Tentar Novamente</Button>
            </Container>
        )
    }

    return (
        <Container>
            <Header/>
            {isLoggedIn ? (
                <>
                    <h3>{busLine.label}</h3>
                    <span>Você está em: </span>
                    <strong>{address}</strong>
                    <span>Informe em quantos minutos a linha está atrasada: </span>
                    <Input type="number" onChange={(e) => changeDelayValue(e.target.value)}/>
                    <Button onClick={sendDelay}>Enviar atraso</Button>
                </>
            ) : (
                <>
                    <h3>Você precisa estar conectado à sua conta para registrar um atraso.</h3>
                    <Button onClick={tryAgain}>Tentar Novamente</Button>
                </>
            )}
            
        </Container>
    )
}


export default ReportDelay;