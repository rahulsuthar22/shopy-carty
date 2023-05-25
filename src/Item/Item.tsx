import { Wrapper } from "./Item.styles";
import { CartItemType } from "../App";
import Button from "@material-ui/core/Button";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.image} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>Rs. {item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
