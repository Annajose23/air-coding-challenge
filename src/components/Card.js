import styled from "styled-components";
import { mobile } from "../responsive";

function Card({ name, avatar, email, description }) {
  return (
    <Container>
      <Left>
        <Avatar src={avatar}/>
      </Left>
      <Right>
        <Name>{name}</Name>
        <Email>{email}</Email>
        <Description>{description}</Description>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  height: 150px;
  ${mobile({
    marginTop:"8px",
  })}
  &:hover { 
     transform: translate(0%, -8%);
     transition: 0.3s ease-out;
     box-shadow: 3px 3px #d3d3d3;
   }
`;
const Left = styled.div`
  flex-grow: 1;
  width: 30%;
`;
const Avatar = styled.img`
object-fit: contain;
width: 80%;
${mobile({
   width:"90%"
  })}
`;

const Right = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  flex-grow: 2;
  padding: 10px;
  ${mobile({
    padding: "0px",
  })}`

const Name = styled.div`
  font-size: 20px;
  font-weight:500;
  padding-bottom: 10px;
  color: #333333;
  ${mobile({
   fontSize:"16px"
  })}
`;

const Email = styled.div`
font-size:16px;
color:#666666;
${mobile({
   fontSize:"14px"
  })}
`

const Description = styled.p`
color:#666666;
font-size:14px;
${mobile({
    fontSize:"13px"
  })}`

export default Card;
