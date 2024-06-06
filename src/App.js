import logo from "./logo.svg";
import "react-multi-carousel/lib/styles.css";
import Routes from "./Routes";

import { HomePage, ProductsDetails } from "./pages";
import ProductsMain from "./pages/products/main";

function App() {
  // return <ProductsDetails />;
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
