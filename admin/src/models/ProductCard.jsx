import { Link } from "react-router-dom";

export const ProductCard = (item) => {
  return (
    <Link to={`/detail/${item._id}`} className="p-5 rounded-md">
      <article>
        <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
          <span className="absolute border-inherit bg-[#0000000a] lg:w-43.75 lg:h-46.25"></span>
          <img
            src={item.images[0]}
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
          <div className="recomendation-carousel-article-old-price text-xs">
            <s className="text-gray-500">
              <span className="text-gray-400">
                $<span className="text-gray-400">229.734</span>
              </span>
            </s>
          </div>
          <div className="recomendation-carousel-article-actual-price text-lg">
            <span>
              $<span>{item.price} </span>
            </span>
            <span className="text-xs text-[#00a650]">13% OFF</span>
          </div>
        </section>
        <footer className="recomendation-carousel-article-footer-container">
          <span className="text-xs text-[#00a650]">Envío gratis</span>
        </footer>
      </article>
    </Link>
  );
};
