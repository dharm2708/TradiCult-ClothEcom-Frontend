import { useLocation, useNavigate } from "react-router-dom";
import MenDetails from "../components/Categories/ProductDetails/MenDetails";
import WomenDetails from "../components/Categories/ProductDetails/WomenDetails";
import KidsDetails from "../components/Categories/ProductDetails/KidsDetails";
const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const category = pathParts[2];

  const renderCategory = () => {
    switch (category) {
      case "men":
        return <MenDetails />;
      case "women":
        return <WomenDetails />;
      case "kids":
        return <KidsDetails />;
      default:
        return navigate(-1);
    }
  };

  return <section>{renderCategory()}</section>;
};

export default Product;
