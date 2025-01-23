"use server";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { isInCart } from "@/app/api/isInCart";
import MaxiButton from "./MaxiButton";
import MiniButton from "./MiniButton";

const Item = async ({
  userId,
  imageSrc,
  name,
  catagory,
  price,
}: {
  userId: string;
  imageSrc: string;
  name: string;
  catagory: string;
  price: number;
}) => {
  const isInCartChecker = await isInCart(userId, name);

  return (
    <div className="">
      <div className="relative rounded-lg ">
        <Image
          height={500}
          width={500}
          className="block w-full rounded-lg"
          src={imageSrc}
          alt={imageSrc}
        />
        {isInCartChecker === 0 ? (
          <AddToCart produactName={name} userId={userId} />
        ) : (
          <div className="absolute px-8 py-3  -bottom-6 left-[50%] translate-x-[-50%] flex gap-8 items-center justify-center w-fit text-nowrap rounded-full bg-myred transition-colors">
            <MiniButton userId={userId} name={name} />
            <span className="text-white font-semibold">{isInCartChecker}</span>
            <MaxiButton userId={userId} name={name} />
          </div>
        )}
      </div>
      <div className="pt-8">
        <p className="text-slate-400">{name}</p>
        <h2 className="text-slate-950 font-bold">{catagory}</h2>
        <p className="text-myred font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Item;
