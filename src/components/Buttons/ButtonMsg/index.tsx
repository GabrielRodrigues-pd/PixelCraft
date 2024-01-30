import React from "react";
import Image from "next/image";
import IconMsg from "@/assets/svg/iconMsg.svg";
import styles from "./button.module.scss";

export default function ButtonMsg() {
  return (
    <a
      className={styles.btn}
      href="https://api.whatsapp.com/send?phone=5583981246429"
      target="_blank"
    >
      <Image src={IconMsg} alt="Icon enviar mensagem" />
      Enviar mensagem
    </a>
  );
}
