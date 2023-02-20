import { FormEvent, useEffect, useState } from "react";
import ListProducts from "../ListProducts";
import NewProduct from "../NewProduct";
import UpdateProduct from "../UpdateProduct";
import * as S from "./styles";

const Main = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );
  const [newProductModal, setNewProductModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState<Product | null>(null);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const json = await res.json();
    setProducts(json);
  };

  const searchProduct = (event?: FormEvent) => {
    if (event) event.preventDefault();

    if (products) {
      setFilteredProducts(
        products?.filter(({ name }) =>
          name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    searchProduct();
  }, [products]);

  return (
    <S.Main>
      <S.Container>
        <S.AddProduct onClick={() => setNewProductModal(true)}>
          Adicionar Produto
        </S.AddProduct>
        <S.Form onSubmit={searchProduct}>
          <S.Input
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            type="text"
            placeholder="Pesquisar produtos..."
          />
          <S.SearchBtn>
            <S.SearchIcon />
          </S.SearchBtn>
        </S.Form>
        <ListProducts
          fetchProducts={fetchProducts}
          setProducts={setProducts}
          products={filteredProducts}
          setUpdateModal={setUpdateModal}
          setProductToUpdate={setProductToUpdate}
        />
        <NewProduct
          active={newProductModal}
          setActive={setNewProductModal}
          products={products}
          setProducts={setProducts}
        />
        <UpdateProduct
          productToUpdate={productToUpdate}
          active={updateModal}
          setActive={setUpdateModal}
          products={products}
          setProducts={setProducts}
        />
      </S.Container>
    </S.Main>
  );
};

export default Main;
