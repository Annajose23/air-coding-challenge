import styled from 'styled-components';

function Title() {
    return (
        <Container>
            <Heading>
                The Person Finder
            </Heading>
        </Container>
    )
}

const Container = styled.div`
height:60px;

`
const Heading = styled.h2`
color:rgba(17, 36, 103, 1);
`
export default Title
