import React, { useEffect, useState } from "react";

//components
import { ItemBlock } from "./ItemBlock/ItemBlock";

// assets
import styles from "./ItemBlocks.module.scss";


export const ItemBlocks = (
  {
    arrItemBlocks,
    finishArr,
    clearArr,
  }) => {

  const [classActive, setClassActive] = useState(false)

  useEffect(() => {
    if (arrItemBlocks.length > 0) {
      setClassActive(true)
    } else {
      setClassActive(false)
    }
  }, [arrItemBlocks])

  return (
    <div className={styles.itemBlocks}>
      <ItemBlock
        arrItemBlocks={arrItemBlocks}
        finishArr={finishArr}
      />
      {classActive && <div className={styles.verticalLine}></div>}
      {classActive && <button
        type="button"
        className={styles.btnClearFilters}
        onClick={() => clearArr()}
      >
        Clear Filters
      </button>}
    </div>
  )
}
