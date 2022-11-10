import Categories from "./categories";
import CurrentCategory from "./current-category";
import Products from "./products";
import { useSelector } from "react-redux";

function StoreFront() {
  const categories = useSelector(state => state.categories);
  return (
    <>
      {
        categories.categories.length !== 0 &&
        <>
          <Categories />
          <CurrentCategory />
          <Products />
        </>
      }
    </>
  )
}

export default StoreFront;