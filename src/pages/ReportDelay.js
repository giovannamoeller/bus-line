import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { busLines } from "../data/busLines";

function ReportDelay() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [address, setAddress] = useState();
    const [error, setError] = useState(false)
    const { id } = useParams();
    const busLine = busLines.find(line => ( line.value === Number(id) ));

    function sendDelay() {
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
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_API_KEY}`
        fetch(url).then(response => response.json()).then(data => {
            const address = data.results[0].formatted_address
            setAddress(address)
        })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            setIsLoading(true)
            setError(false)
            getLocation()
        } else { 
            setError(true)
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
            <h3>{busLine.label}</h3>
            <span>Você está em: </span>
            <strong>{address}</strong>
            <span>Informe em quantos minutos a linha está atrasada: </span>
            <Input type="number"/>
            <Button onClick={sendDelay}>Enviar atraso</Button>
        </Container>
    )
}


export default ReportDelay;