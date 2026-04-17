import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navbar/Navbar";
import { useState, useRef, Children } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useProducts } from "../../../hooks/ProductHook";
import { ProductCard } from "../../../models/productCard/ProductCard";
import type {
  IProductCategoryCarouselProps,
  IButtonIndexProps,
  IRecommendationCarouselProps,
} from "../../../../../shared/interface";

export function ProductCategoryCarousel({
  category,
}: IProductCategoryCarouselProps) {
  const title = category;
  return (
    <div className="flex justify-center">
      <section className="bg-white w-295 h-115.25 p-5">
        <Index_buttons title={title} />
        <ItemsCarousel category={category} />
      </section>
    </div>
  );
}

function ItemsCarousel({ category }: IProductCategoryCarouselProps) {
  const products = useProducts();
  const categoryProducts = products.filter((p) => p.category == category);
  console.log(categoryProducts);
  return (
    <main className="overflow-hidden w-292">
      <section className="flex justify-center p-5">
        <Recommendation_carousel>
          {categoryProducts.map((art, i) => (
            <div
              key={i}
              className="ProductCardModels-card shrink-0 w-47.5 h-85.5"
            >
              <ProductCard product={art} />
            </div>
          ))}
        </Recommendation_carousel>
      </section>
    </main>
  );
}

export function Recommendation_carousel({
  children,
}: IRecommendationCarouselProps) {
  const slides = Children.toArray(children);
  if (!slides) {
    return (
      <>
        <Navbar />
        <main className="m-40 flex justify-center items-center">
          <div className="text center">
            <span className="text-6xl text-red-600 font-bold">
              ERROR Reproduciendo slides
            </span>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  const [curr, setCurr] = useState(0);
  const gap = 16;
  const visibleCount = 6;
  const articleWidth = 190;
  const containerRef = useRef(null);
  const maxIndex = Math.max(0, slides.length - visibleCount);

  const prev = () => setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));

  const next = () => setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));

  return (
    <div
      className="container-cards overflow-hidden relative"
      style={{ width: `${6 * 187 + 5 * gap}px` }}
      ref={containerRef}
    >
      <div
        className="container-cards-slides flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * (articleWidth + gap)}px)`,
          gap: `${gap}px`,
        }}
      >
        {slides}
      </div>
      {slides.length > visibleCount && (
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button
            onClick={prev}
            className="nextButton p-2 w-16 h-16 rounded-full shadow-md bg-white hover:bg-gray-50 text-blue-500 cursor-pointer pointer-events-auto transition-opacity absolute left-0 -ml-4"
            style={{ display: curr === 0 ? "none" : "block" }}
          >
            <ChevronLeft size={45} />
          </button>

          <button
            onClick={next}
            className="p-2 w-16 h-16 rounded-full shadow-md bg-white hover:bg-gray-50 text-blue-500 cursor-pointer pointer-events-auto transition-opacity absolute right-0 -mr-4"
            style={{ display: curr >= maxIndex ? "none" : "block" }}
          >
            <ChevronRight size={45} />
          </button>
        </div>
      )}
    </div>
  );
}

const Index_buttons = ({ title }: IButtonIndexProps) => {
  return (
    <header className="related_history-header-container flex justify-between">
      <h3 className="font-bold">{title}</h3>
      <ul className="flex gap-3">
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-blue-200 cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
      </ul>
    </header>
  );
};
