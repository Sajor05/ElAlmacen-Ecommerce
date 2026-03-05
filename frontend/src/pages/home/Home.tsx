import { QuickAccess } from "../../hooks/Quickaccess";
import { Navbar } from "../../components/navbar/Navbar";
import { Main_carousel } from "../../components/carousel/mainCarousel/MainCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main_carousel />
      <main className="flex flex-col justify-center">
        <section className="flex justify-center">
          <QuickAccess />
        </section>
        <div>hola mundo</div>
      </main>
    </>
  );
}
