import { Link, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

// style
import "./Navbar.css";

const Navbar = ({ list }) => {
  let navigate = useNavigate();
  const scrollTarget = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 1000,
      spy: true,
      activeClass: "active",
      offset: -40,
    });
  };

  const scrollToPage = async (el) => {
    if (window.location.pathname !== "/") {
      await navigate("/");
    }
    scrollTarget(el);
  };

  return (
    list && (
      <ul className="main-nav">
        {list.map((category) => (
          <li className="main-nav__item" key={category.code}>
            <Link
              to={category.code}
              className="main-nav__link"
              onClick={() => scrollToPage(category.code)}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default Navbar;
