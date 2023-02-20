import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const AddProduct = styled.button`
  display: inline-block;
  border-radius: 3px;
  margin-bottom: 2rem;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--green);
  color: var(--color2);
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 600px;
  @media (max-width: 600px) {
    grid-area: form;
    max-width: none;
  }
`;

export const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  border-radius: 5px 0 0 5px;
  border: 2px solid transparent;
  border-right: none;
  padding: 7px 10px;
  outline: none;
  min-width: 0;
  background-color: var(--color2);
  &:focus-visible,
  :focus-visible + button {
    border-color: #005aca;
  }
  @media (max-width: 600px) {
    grid-area: addProduto;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  border: 2px solid transparent;
  border-left: none;
  padding: 3px;
  background-color: var(--color2);
  cursor: pointer;
`;

export const SearchIcon = styled(BiSearchAlt2)`
  font-size: 1.3rem;
`;
