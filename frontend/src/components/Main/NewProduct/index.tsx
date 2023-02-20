import { FormEvent, useState } from "react";
import Modal from "../Modal";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  fetchProducts(): Promise<void>;
}

const NewProduct = ({ active, setActive, fetchProducts }: Props) => {
  const [fields, setFields] = useState<ProductFields>({
    name: "",
    price: "",
    image: "",
  });

  const addProduct = async (event: FormEvent) => {
    event?.preventDefault();

    const product = {
      ...fields,
      price: Number(fields.price.replace(",", ".")),
    };

    const res = await fetch("http://localhost:3000/products/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (res.status === 200) {
      setActive(false);
      fetchProducts();
    }
  };

  return (
    <Modal
      title="Adicionar Produto"
      active={active}
      setActive={setActive}
      fields={fields}
      setFields={setFields}
      handleSubmit={addProduct}
      buttonText="Adicionar"
    />
  );
};

export default NewProduct;
