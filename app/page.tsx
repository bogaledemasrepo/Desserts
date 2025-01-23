import { getAllData } from "@/app/api/getAllData";
import Item from "../components/Item";
import Cart from "@/components/Cart";

export default async function Home() {
  const data = await getAllData();
  return (
    <div className="w-[85vw] mx-auto">
      <h1 className="text-4xl font-bold py-4">Dessers</h1>
      <div className="flex flex-col min-[670px]:flex-row gap-16">
        <div className="flex-1 flex-grow grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-y-scroll">
          {data.map((item) => (
            <Item
              key={item.name}
              userId="user1"
              imageSrc={item.image.desktop}
              name={item.name}
              catagory={item.category}
              price={item.price}
            />
          ))}
        </div>
        <Cart userId={"user1"} />
      </div>
    </div>
  );
}
