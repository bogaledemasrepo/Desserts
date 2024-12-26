import React, { ReactNode } from "react";

const Cartwrapper = ({
  pendingOrderCount,
  children,
}: {
  pendingOrderCount: number;
  children: ReactNode;
}) => {
  return (
    <div className="w-[300px] h-fit py-8 px-2 rounded-md flex flex-col">
      <h2 className="text-2xl text-myred font-bold">
        Your Cart({pendingOrderCount})
      </h2>
      {children}
    </div>
  );
};

export default Cartwrapper;
