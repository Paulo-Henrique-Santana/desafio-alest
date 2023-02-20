import { useState, useEffect, Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface Props {
  fetchProducts(): Promise<void>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
  setProductToUpdate: Dispatch<SetStateAction<Product | null>>;
}

const ListProducts = ({
  fetchProducts,
  products,
  setProducts,
  setUpdateModal,
  setProductToUpdate,
}: Props) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    const res = await fetch("http://localhost:3000/products/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (res.status === 200 && products) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  if (products)
    return (
      <S.Products>
        {products.map((product, index) => (
          <S.ProductCard key={index}>
            <S.DeleteIcon onClick={() => deleteProduct(product.id)} />
            <S.EditIcon
              onClick={() => {
                setProductToUpdate(product);
                setUpdateModal(true);
              }}
            />
            <S.ProductImage src={product.image} alt={product.name} />
            <S.ProductInfos>
              <S.ProductName>{product.name}</S.ProductName>
              <p>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </S.ProductInfos>
          </S.ProductCard>
        ))}
      </S.Products>
    );
  else return <p>Carregando...</p>;
};

export default ListProducts;
