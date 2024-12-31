import { getAllData } from "@/app/api/actions/getAllData";
import Item from "../../../components/Item";
import Cart from "@/components/Cart";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function Home() {
  const data = await getAllData();
  const session = await auth();
  console.log(session);
  if (session?.user?.name) {
    return (
      <div className="relative w-[85vw] mx-auto">
        <Header />
        <div className="flex mt-24 flex-col sm:flex-row gap-16">
          <div className="flex-1 flex-grow grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-y-scroll">
            {data.map((item) => (
              <Item
                key={item.name}
                userId={session.user?.name || ""}
                imageSrc={item.image.desktop}
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
  } else redirect("/");
}
