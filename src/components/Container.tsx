import React from "react";
import Channel from "./Channel";
// [calc(100% - 20rem)]
export const Container = () => {
  return (
    <div className=" w-72 h-full  bg-slate-200 absolute left-20 ">
      <input
        type="text"
        className=" m-3 h-10 rounded-2xl w-11/12  inline-block"
      />
      <Channel />
    </div>
  );
};
