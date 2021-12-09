import styled from "styled-components";
import { SearchIcon } from "@heroicons/react/outline";

function Search(props) {
  return (
    <Container>
      <Icon>
        <SearchIcon />
      </Icon>
      <SearchInput placeholder="Search in Air HQ" onChange={(e) => props.searchKeywordHandler(e.target.value)}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #efefef;
`;
const Icon = styled.div`
  width: 17px;
  padding: 10px 5px 10px 10px;
  color: gray;
`;
const SearchInput = styled.input`
border:none;
background-color: #efefef;
outline: none;
width:calc(100% - 40px);
`;

export default Search;
