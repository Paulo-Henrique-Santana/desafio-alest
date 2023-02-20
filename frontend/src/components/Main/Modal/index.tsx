import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
} from "react";
import * as S from "./styles";

interface Props {
  title: string;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  fields: ProductFields;
  setFields: Dispatch<SetStateAction<ProductFields>>;
  handleSubmit: (event: FormEvent) => Promise<void>;
  buttonText: string;
}

const Modal = ({
  title,
  active,
  setActive,
  fields,
  setFields,
  handleSubmit,
  buttonText,
}: Props) => {
  const disableModal = (event: MouseEvent) => {
    if (event.target === event.currentTarget) setActive(false);
  };

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let value = target.value;

    if (target.id === "price") value = value.replace(/[^\d,.]*/g, "");

    setFields({ ...fields, [target.id]: value });
  };

  return (
    <S.Modal onClick={disableModal} data-active={active}>
      <S.Container>
        <S.Titulo>{title}</S.Titulo>
        <S.Form onSubmit={handleSubmit}>
          <S.FieldBox>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              id="name"
              value={fields.name}
              onChange={handleChangeInput}
              type="text"
              placeholder="Nome do produto"
              required
            />
          </S.FieldBox>
          <S.FieldBox>
            <S.Label htmlFor="price">Preco</S.Label>
            <S.Input
              id="price"
              value={fields.price}
              onChange={handleChangeInput}
              type="text"
              placeholder="Valor do produto. Ex: 299,99"
              required
            />
          </S.FieldBox>
          <S.FieldBox>
            <S.Label htmlFor="image">Imagem</S.Label>
            <S.Input
              id="image"
              value={fields.image}
              onChange={handleChangeInput}
              type="text"
              placeholder="URL da imagem do produto"
              required
            />
          </S.FieldBox>
          <S.Button>{buttonText}</S.Button>
        </S.Form>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
