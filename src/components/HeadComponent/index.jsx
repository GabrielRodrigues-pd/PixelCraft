import React from "react";
import { Head } from "./styles";

import Image from "next/image";
import star from "../../assets/star.svg";

export default function HeadComponent({ title, subTitle }) {
  return (
    <Head>
      <div>
        <Image src={star} alt="" />
        <p>{subTitle}</p>
      </div>

      <h2>
        {title}
        <span>.</span>
      </h2>
    </Head>
  );
}
