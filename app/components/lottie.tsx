"use client";
import Lottie from "lottie-react";
import React from "react";
interface Props {
  data: object | object[] | string;
}
const Getlottie: React.FC<Props> = ({ data }) => {
  return <Lottie animationData={data} loop={true}></Lottie>;
};

export default Getlottie;
