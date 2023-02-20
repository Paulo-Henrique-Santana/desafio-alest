import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Modal from "../Modal";

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
}

const NewProduct = ({ active, setActive, products, setProducts }: Props) => {
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

    if (res.status === 200 && products) {
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
      setActive(false);
    }
  };

  useEffect(() => {
    if (!active) setFields({ name: "", price: "", image: "" });
  }, [active]);

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
