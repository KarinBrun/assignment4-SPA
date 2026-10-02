function CartItem(props) {
  return (
    <div className="cart-item">
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <button onClick={props.onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;