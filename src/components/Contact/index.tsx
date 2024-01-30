import React from "react";
import Image from "next/image";
import styles from "./contact.module.scss";
import IconEmail from "@/assets/svg/email.svg";
import ImgBg from "@/assets/png/footer.png";
import ButtonMsg from "../Buttons/ButtonMsg";
import ButtonProject from "@/components/Buttons/ButtonProject";

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.boxBg}>
        <Image
          src={ImgBg}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          alt=""
          className={styles.imgStyle}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.flame}>
          <h2>
            Vamos iniciar um <br /> Projeto?
          </h2>
          <p>
            Você tem uma ideia inovadora? Está em busca de parcerias para
            transformá-la em realidade? Então, vamos criar um projeto juntos!
          </p>
          <ButtonProject title="Iniciar um projeto" />
        </div>
        <div className={styles.boxContact}>
          <h3>
            Ainda tem alguma dúvida? <br /> Entre em contato
          </h3>
          <div className={styles.boxEmail}>
            <Image src={IconEmail} alt="" />
            <div>
              <h4>E-mail</h4>
              <p>Envie sua dúvida por e-mail</p>
              <a href="mailto:studiopixelcraft@contato.com">
                studiopixelcraft@contato.com
              </a>
            </div>
          </div>
          <ButtonMsg />
        </div>
      </div>
    </section>
  );
}
