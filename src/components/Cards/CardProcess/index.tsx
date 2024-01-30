import React from "react";
import styles from "./cardprocess.module.scss";

interface cardProcessProps {
  title: string;
  number: string;
  disc: string;
}

export default function CardProcess({ title, number, disc }: cardProcessProps) {
  return (
    <div className={styles.card}>
      <div>
        <span>{number}</span>
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>
    </div>
  );
}
