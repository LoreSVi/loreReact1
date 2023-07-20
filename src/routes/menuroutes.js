import Form from "../components/pages/Form/Form";
import CartContainer from "../components/pages/cart/CartContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import FormFormik from "../components/pages/FormFormik/FormFormik";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductsListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  }

];
