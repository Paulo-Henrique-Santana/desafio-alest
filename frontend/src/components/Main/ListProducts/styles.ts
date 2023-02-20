import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";

export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.li`
  position: relative;
  border-radius: 4px;
  background-color: var(--color3);
  color: var(--color2);
`;

export const DeleteIcon = styled(MdDeleteForever)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px 0 4px 0;
  padding: 5px;
  font-size: 2.5rem;
  background-color: var(--red);
  color: var(--color2);
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 4px 0 4px;
  padding: 6px;
  font-size: 2.5rem;
  background-color: var(--yellow);
  color: var(--color2);
  cursor: pointer;
`;

export const ProductImage = styled.img`
  border-radius: 4px 4px 0 0;
`;

export const ProductInfos = styled.div`
  padding: 15px;
  text-align: center;
`;

export const ProductName = styled.p`
  height: 50px;
  font-weight: bold;
`;
