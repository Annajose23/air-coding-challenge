import styled from 'styled-components';
import { mobile } from '../responsive';

function Paragraph() {
    return (
       <Container>
           <P>
               If you just can't find someone and need to know what they look like, you've come to the right place!
               Just type the name of the person you are looking for below into the search box!
           </P>
       </Container>
    )
}

const Container = styled.div`
 ${mobile({
    marginBottom:"10px",
  })}
`
const P = styled.p`
font-size: 16px;
${mobile({
    fontSize:"12px",
  })}
`;

export default Paragraph
