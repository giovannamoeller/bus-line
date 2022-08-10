import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    span {
        text-align: center;
        color: #959595;
        margin: 0.5rem 0;
        &.important {
            color: #FFF;
            font-weight: bold;
            cursor: pointer;
        }
        &.header-description {
            margin: 2rem 0;
        }
    }

    strong {
        color: #9A2424;
    }
`;