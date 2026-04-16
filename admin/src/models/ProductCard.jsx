import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const finalPrice = item.isOffer
    ? item.price - (item.price / 100) * item.offerPercent
    : item.price;
  return (
    <Link to={"#"} className="p-5 rounded-md">
      <article className="bg-[#E7E7E7] p-5 rounded-lg">
        <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
          <span className="absolute border-inherit bg-[#0000000a]"></span>
          <img
            src={item.imagesArray[0]}
            alt={item.title}
            style={{
              width: `171px`,
              height: `171px`,
            }}
          />
        </div>
        <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2 mt-3">
          <p>{item.title}</p>
        </div>
        <section className="recomendation-carousel-article-price-container px-2">
          <div className="recomendation-carousel-article-old-price flex text-xs gap-2">
            <s className="text-gray-500">
              <span className="text-gray-400">
                $<span className="text-gray-400">{item.price}</span>
              </span>
            </s>
            {item.isOffer === true && (
              <span className="text-xs text-[#00a650]">
                {item.offerPercent}% OFF
              </span>
            )}
          </div>
          <div className="recomendation-carousel-article-actual-price text-lg">
            $<span>{finalPrice}</span>
            <span className="text-xs text-[#00a650]">Envío gratis</span>
          </div>
        </section>
        <footer className="recomendation-carousel-article-footer-container flex items-center gap-3 px-2">
          <span className="text-sm">Stock: {item.stock}</span>
        </footer>
      </article>
    </Link>
  );
};
