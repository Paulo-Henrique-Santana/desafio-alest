import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Modal from "../Modal";

interface Props {
  productToUpdate: Product | null;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  products: Product[] | null;
  setProducts: Dispatch<SetStateAction<Product[] | null>>;
}

const UpdateProduct = ({
  productToUpdate,
  active,
  setActive,
  products,
  setProducts,
}: Props) => {
  const [fields, setFields] = useState<ProductFields>({
    name: "",
    price: "",
    image: "",
  });

  const updateProduct = async (event: FormEvent) => {
    event?.preventDefault();

    const changedProduct = {
      ...fields,
      price: Number(fields.price.replace(",", ".")),
    };

    const res = await fetch("http://localhost:3000/products/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productToUpdate?.id, changedProduct }),
    });

    if (res.status === 200 && products) {
      const newProducts = products.map((product) => {
        if (product.id === productToUpdate?.id) {
          return { ...changedProduct, id: productToUpdate.id };
        } else {
          return product;
        }
      });

      setProducts(newProducts);
      setActive(false);
    }
  };

  useEffect(() => {
    if (productToUpdate) {
      const { name, image } = productToUpdate;
      const price = String(productToUpdate.price);
      setFields({ name, price, image });
    }
  }, [productToUpdate]);

  return (
    <Modal
      title="Alterar Produto"
      active={active}
      setActive={setActive}
      fields={fields}
      setFields={setFields}
      handleSubmit={updateProduct}
      buttonText="Alterar"
    />
  );
};

export default UpdateProduct;
