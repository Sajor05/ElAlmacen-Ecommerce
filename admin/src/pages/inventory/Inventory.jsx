import { Navbar } from "../../components/navbar/Navbar";
import { SectionTitle } from "../../models/SectionTitle";
import { CreateCategory } from "./forms/CreateCategories";
import { CreateProduct } from "./forms/CreateProduct";
import { usePageTitle } from "../../hooks/PageTitle";
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
  return (
    <aside className="border border-gray-400 rounded-lg p-5">
      <SectionTitle text={"Inventario"} />
    </aside>
  );
};
