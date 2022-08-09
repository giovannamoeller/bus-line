import { Button } from "../components/Button";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Select from 'react-select';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { busLines } from "../data/busLines";

function SelectBusLine() {
    const navigate = useNavigate();
    const [currentBusLine, setCurrentBusLine] = useState(busLines[0]);
    const city = 'Bauru, São Paulo'
    function changeBusLine(busLine) {
        setCurrentBusLine(busLine)
    }
    function goToBusPage() {
        navigate(`/bus/${currentBusLine.value}`);
    }
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: '#959595',
            backgroundColor: state.isSelected || state.isFocused ? '#1E1E1E' : '#0F0F0F',
            padding: 20,
          }),
        control: (base, state) => ({
          ...base,
          width: 400,
          margin: 30,
          height: 56,
          background: "#0F0F0F",
          borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
          borderColor: "#000",
          "&:hover": {
            borderColor: "#000"
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };
    return (
        <Container>
            <Header/>
            <span>Selecione a linha de ônibus desejada.</span>
            <span className="important">Cidade: {city}.</span>
            <Select options={busLines} styles={customStyles} onChange={event => changeBusLine(event)}/>
            <Button onClick={goToBusPage}>Continuar</Button>
        </Container>
    )
}

export default SelectBusLine;