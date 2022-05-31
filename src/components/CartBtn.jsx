import { Link } from "react-router-dom";

const CartBtn = () => {
  return (
    <Link to="/cart" className="btn btn-default btn-cart">
      <i className="icon fa fa-shopping-cart"></i>
      <span className="text">Корзина</span>
      <span className="count">0</span>
    </Link>
  );
};

export default CartBtn;
