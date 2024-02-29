import React from "react";
import Channel from "./Channel";
// [calc(100% - 20rem)]
export const Container = () => {
  return (
    <div className=" w-40 h-full bg-blue-600 absolute left-20 ">
      <input type="text" className=" rounded-2xl w-full inline-block" />
      <Channel />
    </div>
  );
};
