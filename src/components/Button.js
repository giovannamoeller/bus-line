import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => !props.secondary ? "#9A2424" : "#EAEAEA"};
    height: 56px;
    border: none;
    color: ${props => !props.secondary ? "#FFF" : "#9A2424"};
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0 1rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 89px 80px rgba(154, 36, 36, 0.19), 0px 41.1474px 36.9864px rgba(154, 36, 36, 0.140918), 0px 23.5436px 21.1628px rgba(154, 36, 36, 0.119088), 0px 14.2908px 12.8457px rgba(154, 36, 36, 0.10259), 0px 8.61083px 7.74008px rgba(154, 36, 36, 0.0874098), 0px 4.79507px 4.31018px rgba(154, 36, 36, 0.0709116), 0px 2.06233px 1.85378px rgba(154, 36, 36, 0.0490817);
    font-family: 'Poppins', sans-serif;
    width: 264px;
    margin-top: 1rem;
    margin-bottom: 2rem;
`; 