import styled from 'styled-components';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <Logo src={logo} alt="BusTracker"/>
    )
}

const Logo = styled.img`
    height: 5rem;
`;

export default Header;