import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

//components
import { Header, StickyBlock } from "./components";

//pages
import { Home, Cart } from "./pages";

// actions
import { fetchCategories } from "./redux/actions/category";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <StickyBlock />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
