import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Search from "./components/Search";
import Card from "./components/Card";
import { mobile } from './responsive';
import { mobileL } from "./responsive";

function App() {
  const [personDetails, setPersonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const isCancelled = useRef(false);
  // console.log(process.env.REACT_APP_URL);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      process.env.REACT_APP_URL
    )
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setIsError(false);
        if (!isCancelled.current) {
          return setPersonDetails(res);
        }
      })
      .catch((err) => {
         setIsLoading(false);
         setIsError(true);
      });
    return () => {
      isCancelled.current = true;
    };
  }, []);

  const onSearchHandler = (keyword) => {
    setSearchKeyword(keyword);
  }

  let content;

  if (personDetails.length === 0 && !isLoading && !isError) {
    content = <p>No data found</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if(isError){
    content = <p>Something went wrong!</p>;
  }
  else {
    content = (
      <>
        {personDetails.filter((p) => p.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1).map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </>
    );
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title />
        <Paragraph />
        <Search searchKeywordHandler={onSearchHandler}/>
        <CardWrapper>{content}</CardWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 50%;
  height: calc(100vh - 40px);
  margin: auto;
  display: flex;
  flex-direction: column;
  ${mobile({
    width:"90%",
  })}
  ${mobileL({
    width:"90%",
  })}
`;

const CardWrapper = styled.div`
  height: calc(100vh - 240px);
  margin-top: 10px;
  overflow-y: scroll;
  /* ::-webkit-scrollbar {
    width: 12px;
  } */
`;

export default App;
