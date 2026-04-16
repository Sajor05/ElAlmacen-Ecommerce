import { Navbar } from "../../components/navbar/Navbar";
import { SectionTitle } from "../../models/SectionTitle";
import { CreateCategory } from "./forms/CreateCategories";
import { CreateProduct } from "./forms/CreateProduct";
import { ProductCard } from "../../models/ProductCard";
import { usePageTitle } from "../../hooks/PageTitle";
import { useProducts } from "../../hooks/ProductsHook";
export const Inventory = () => {
  usePageTitle("Inventario | El almacén");
  return (
    <>
      <div className="flex flex-row gap-10">
        <Navbar />
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-[800px_500px] gap-8">
            <div className="flex flex-col gap-5">
              <CreateCategory />
              <CreateProduct />
            </div>
            <InventoryList />
          </div>
        </div>
      </div>
    </>
  );
};

const InventoryList = () => {
  const products = useProducts();
  return (
    <aside className="bg-white rounded-lg p-5 lg:h-230">
      <header>
        <SectionTitle text={"Inventario"} />
        <div className="p-4 text-center">
          Cantidad de productos: {products.length}
        </div>
      </header>
      <main className="mx-3">
        <div className="grid grid-cols-1 lg:h-190 overflow-y-auto gap-3">
          {products.map((p, k) => (
            <ProductCard item={p} key={k} />
          ))}
        </div>
      </main>
    </aside>
  );
};
