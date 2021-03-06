import { useDispatch } from "react-redux";

//components
import { Button } from "../index";
// actions
import { setModal } from "../../redux/actions/modal";
// style
import "./Product.css";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  const {
    id,
    title,
    description,
    image,
    is_aviable,
    current_price,
    old_price,
    min_price,
    quantity,
  } = data;
  return (
    <div className="item">
      <div className="item___top">
        {/*<div className="item__stickers">
          <div className="label label-green2">Без свинины</div>
        </div>*/}
        {quantity && (
          <div className="item__quantity">
            <i className="icon fa fa-user"></i>
            <span>{quantity}</span>
          </div>
        )}
        <div className="item__img">
          <img src={image} alt="alt" />
        </div>
        <h5 className="item__title">{title}</h5>
        <div className="item__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="item__bottom">
        {is_aviable ? (
          <>
            <div className="item__price">
              {old_price && <div className="old-price">{old_price} тг.</div>}
              {min_price || current_price ? (
                <div className="current-price">
                  {min_price ? "от " + min_price : current_price} тг.
                </div>
              ) : (
                ""
              )}
            </div>
            <Button
              text="Выбрать"
              onClickBtn={() =>
                dispatch(setModal({ status: true, type: "just" }))
              }
            ></Button>
          </>
        ) : (
          <div className="item__amount">
            <span>Нет в наличии</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
