import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../data/products";
import { useEffect } from "react";

const ProductPage = () => {
  useEffect(() => {
    document.title = "JO'E Cape | Products";
  }, []);
  return (
    <div className="flex flex-col gap-24">
      <Header title="Products" />
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-10 md:px-16">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard name={product.name} price={product.price} detail={product.detail} imageUrl={product.image} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
