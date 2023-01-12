import styles from "./ItemBlock.module.scss";
import React from "react";

const ItemBlock = ({ arrItemBlocks, finishArr }) => {
  return (
    arrItemBlocks.map((el, id) => (
        <div className={styles.itemBlock}>
          <div>
            <span>{el[0]}</span>
            <span>{el[1]}</span>
          </div>
          <span
            className={styles.close}
            onClick={() => finishArr(id)}
          >x</span>
        </div>
      )
    )
  )
}

export default ItemBlock;
