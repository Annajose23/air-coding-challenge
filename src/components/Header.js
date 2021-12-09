import styled from 'styled-components';
import logo from '../images/air-logo.jpg';

function Header() {
    return (
        <Container>
            <Logo src={logo}/>
        </Container>
    )
}

const Container = styled.div`
height:40px;
`;

const Logo = styled.img`
position: relative;
left: 8%;
top: 5%;
`;

export default Header
