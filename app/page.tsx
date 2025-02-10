import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Item from "@/components/Item";
import data from "@/data";
import ApiContextProvider from "@/hooks/apiContext";

export default async function Home() {
  return (
    <ApiContextProvider>
      <div className="w-[85vw] mx-auto pt-[100px]">
        <Header />
        <div className="flex flex-col min-[670px]:flex-row gap-16">
          <div className="flex-1 flex-grow grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-y-scroll">
            {data.map((I) => (
              <Item
                key={I.name}
                image={I.image.desktop}
                name={I.name}
                price={I.price}
                catagory={I.category}
              />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </ApiContextProvider>
  );
}
