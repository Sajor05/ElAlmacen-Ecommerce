import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/ProductHook";
import { Navbar } from "../../components/extends/navbar/Navbar";
import { Footer } from "../../components/extends/footer/Footer";
import type { IProductViewProps } from "../../../../shared/interface";
import { ProductIDNotFoundError } from "../../errors/ProductErrorsManager";

export function ProductViewCard() {
  const { _id } = useParams();
  const products = useProducts();
  const foundItem = products.find((p) => p._id.toString() == _id);
  console.log(foundItem);
  return (
    <>
      <Navbar />
      {foundItem ? (
        <ProductView product={foundItem} />
      ) : (
        <ProductIDNotFoundError />
      )}
      <Footer />
    </>
  );
}

const ProductView = ({ product }: IProductViewProps) => {
  return (
    <main className="mx-50 flex justify-center">
      <span>Holaaaaa</span>
      <div className="grid grid-cols-[820px_1fr] gap-8">
        <section className="felx flex-row gap-3">
          <div className="product-images-carousel">
            {product.imagesArray[0]}
          </div>
        </section>
        <aside>
          <span>Comprar</span>
        </aside>
      </div>
    </main>
  );
};
