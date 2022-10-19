import React from "react";
import { serverUrl } from "../../serverUrl";
import styles from "./alphabetCard.module.css";

const AlphabetCard = ({ item }) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageField}>
        <img src={`${serverUrl}/images/${item.image}`} alt="image" />
        </div>
      <div className={styles.textField}>
        <p>{item.name}</p>
        <p>Price: <b>{item.priceStart}$</b></p>
        <p>Description:</p>
        <p>{item.description.substr(0, 60) + '...'}</p>
      </div>
    </div>
  );
};

export default AlphabetCard;
