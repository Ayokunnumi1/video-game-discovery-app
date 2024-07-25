interface Props {
    cartItem: string[];
    onClear: () => void;
}

const Cart = ({ cartItem, onClear }: Props) => {
  return (
    <div>
      <ul>
        {cartItem.map((cart) => (
          <li key={cart}>{cart}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
