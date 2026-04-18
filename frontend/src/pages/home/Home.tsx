import { QuickAccess } from "../../hooks/Quickaccess";
import { Navbar } from "../../components/extends/navbar/Navbar";
import { Main_carousel } from "../../components/carousel/mainCarousel/MainCarousel";
import { Footer } from "../../components/extends/footer/Footer";
import { ProductCategoryCarousel } from "../../components/carousel/productsCarousel/ProductCategoryCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main_carousel />
      <main className="flex flex-col gap-40 justify-center">
        <section className="flex justify-center">
          <QuickAccess />
        </section>
        <ProductsCarouselSection />
      </main>
      <Footer />
    </>
  );
}

const ProductsCarouselSection = () => {
  return (
    <section className="flex flex-col gap-5 mx-50">
      <ProductCategoryCarousel category={"Electrónica, Audio y Video"} />
      <ProductCategoryCarousel category={"Ropa y Accesorios"} />
    </section>
  );
};
