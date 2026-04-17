import { Link } from "react-router-dom";
import type { IProductCard } from "../../../../shared/interface";

export function ProductCard({ product }: IProductCard) {
  return (
    <Link to={"#"}>
      <article className=" flex flex-col gap-4 items-center bg-[#e7e7e7] p-5 rounded-xl">
        <div className="product-image-container">
          <img
            src={product.imagesArray[0]}
            alt={product.title}
            className="product-image w-42.75 h-37.5"
          />
        </div>
        <div>
          <span>{product.title}</span>
        </div>
        <footer>
          <div className="product-price-container">
            <span className="product-price">${product.price}</span>
          </div>
        </footer>
      </article>
    </Link>
  );
}
