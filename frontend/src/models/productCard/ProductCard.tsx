import type { Product } from "../../interface/interface";
export function ProductCard(product: Product) {
  return (
    <article>
      <div className="product-title-container">
        <span className="product-title">{product.title}</span>
      </div>
      <div className="product-provider-container">
        <span className="product-provider">{product.provider}</span>
      </div>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-price-container">
        <span className="product-price">${product.price}</span>
      </div>
      <button className="rounded p-5 bg-[#FF0000]">
        <span className="text-white uppercase font-bold">comprar</span>
      </button>
    </article>
  );
}
