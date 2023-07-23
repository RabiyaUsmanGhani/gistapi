import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import dotenv from 'dotenv';
dotenv.config();

const App = () => {
  // Set the search value's state in the main file since both components need it.
  //  The Gitlist component uses it for fetching users,
  // and the Search component displays and updates the search value.

  const [searchValue, setSearchValue] = useState("");
  return (
    <Wrapper className="App" data-testid="app">
      <Header setSearchValue={setSearchValue} />
      <GlobalStyles />
      <GistList searchValue={searchValue} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
