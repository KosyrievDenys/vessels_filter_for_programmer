import styles from "./ItemBlock.module.scss";
import React from "react";

export const ItemBlock = (
  {
    arrItemBlocks,
    finishArr
  }) => {
  return (
    arrItemBlocks.map((arr, id) => (
        <div className={styles.itemBlock}>
          <div className={styles.block}>
            <span>{arr.title}</span>
            <span>{arr.value}</span>
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

