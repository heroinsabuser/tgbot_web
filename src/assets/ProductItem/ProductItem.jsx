import styled from "styled-components";
import Button from "../Button/button";


const ProductElement = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--tg-theme-button-color);
  padding: 15px;
  width: 170px;
`;
const ImageElement = styled.div`
  width: 100%;
  background: lightgray;
  height: 100px;
  margin: 0 auto;
  background: var(--tg-theme-button-color);
`;
const TitleElement = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--tg-theme-button-color);
  padding: 15px;
  width: 170px;
`;
const DescriptionElement = styled.div`
  font-size: 0.8em;
`;
const PriceElement = styled.div`
  color: green;
`;
const ButtonElement = styled(Button)`
  width: 100%;
`;

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <ProductElement className={className}>
      <ImageElement />
      <TitleElement>{product.title}</TitleElement>
      <DescriptionElement>{product.description}</DescriptionElement>
      <PriceElement>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </PriceElement>
      <ButtonElement onClick={onAddHandler}>Добавить в корзину</ButtonElement>
    </ProductElement>
  );
};

export default ProductItem;
