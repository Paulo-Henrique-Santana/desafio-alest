import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  color: var(--color2);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.7);
  &[data-active="true"] {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 40%);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  background-color: var(--color3);
`;

export const Titulo = styled.h1`
  font-size: 1.6rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 100vw;
  max-width: 300px;
  @media (max-width: 425px) {
    max-width: 200px;
  }
`;

export const FieldBox = styled.div`
  margin: 2rem 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 5px;
  width: 100%;
  font-size: 1rem;
`;

export const Button = styled.button`
  display: block;
  margin: 3rem auto 0 auto;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 100%;
  max-width: 150px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: var(--green);
  color: var(--color2);
  cursor: pointer;
`;
