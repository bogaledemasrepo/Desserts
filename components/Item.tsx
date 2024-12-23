import React from "react";
import Image from "next/image";
import ImageUrl from "../assets/images/image-baklava-tablet.jpg";

const Item = ({
  image,
  name,
  catagory,
  price,
}: {
  image: string;
  name: string;
  catagory: string;
  price: number;
}) => {
  return (
    <div className="">
      <div className="relative rounded-lg ">
        <Image className="block w-full" src={ImageUrl} alt={image} />
        <button className="absolute px-4 py-3 bg-slate-200 border border-slate-300 rounded-full -bottom-6 left-[50%] translate-x-[-50%]">
          Add to cart
        </button>
      </div>
      <div className="pt-8">
        <p className="text-slate-400">{name}</p>
        <h2 className="text-slate-950 font-bold">{catagory}</h2>
        <p className="text-red-500 font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Item;
