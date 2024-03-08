import React from "react";
interface Props {
  text: string;
}
export const Button = ({ text }: Props) => {
  return <button className="btn btn-next">{text} </button>;
};
