import { CarouselLoop } from "./CarouselLoop.tsx";

const carousel_images = [
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/c9ee3d1a-0568-4bc2-a25f-0b3c3abcf673___9145bfdfc1005917237f957d33c03e01.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/214b5051-d3c3-458f-9a90-643d20f92ffb___94106363538f8b6176200a769c111294.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/a40da597-2274-41e4-b4a6-7fa6afa1da78___bc21ba5e44799d7d1d89a75b8d28c3d1.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/1d520add-01f9-4403-a930-396e6faecf72___8359d6fb47b133f576b2baa91a892308.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/a784d1a4-c0c6-44f5-b14e-0e8fc9042a98___ad0b37fbe4a68de508d25e0eed52a15a.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/fc18ca1f-d5e6-4b51-b4c9-eee59bfeec0b___6389caf5ac1ca11969317cefb3c66ad4.jpg",
  "https://elabastecedorar.vtexassets.com/assets/vtex.file-manager-graphql/images/40d65730-7c89-41ea-b798-e4df3f01c5d5___602ce7943f86589bae4ab594c2096dc1.jpg",
];

export const Main_carousel = () => {
  return (
    <section className="">
      <div className="relative top-25">
        <CarouselLoop>
          {carousel_images.map((s, i) => (
            <div key={i} className="relative w-full shrink-0">
              <img src={s} alt="" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-b from-transparent to-[#e7e7e7] z-3 pointer-events-none"></div>
            </div>
          ))}
        </CarouselLoop>
      </div>
      <div className="h-2"></div>
    </section>
  );
};
