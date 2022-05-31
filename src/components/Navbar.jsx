import { Link } from "react-router-dom";

const Navbar = ({ list }) => {
  console.log("navbar");
  return (
    list && (
      <ul className="main-nav">
        {list.map((category) => (
          <li className="main-nav__item" key={category.code}>
            <Link to={"/#" + category.code} className="main-nav__link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default Navbar;
