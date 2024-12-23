import { data } from "./../assets/js/data";
import Item from "../components/Item";

export default function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <h1 className="text-3xl">Dessers</h1>
      <div className="flex flex-col min-[670px]:flex-row gap-4">
        <div className="flex-1 flex-grow grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-scroll">
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
        <div className="w-[300px] h-[400px] bg-slate-300 border border-slate-500 rounded-md">
          <h1>Your Cart(0)</h1>
        </div>
      </div>
    </div>
  );
}
