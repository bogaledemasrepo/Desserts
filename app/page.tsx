import { data } from "@/data/data";
import Item from "../components/Item";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <h1 className="text-3xl">Dessers</h1>
      <div className="flex flex-col min-[670px]:flex-row gap-8">
        <div className="flex-1 flex-grow grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-y-scroll">
          {data.map((item) => (
            <Item
              key={item.name}
              image={item.image.mobile}
              name={item.name}
              catagory={item.category}
              price={item.price}
            />
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
}
