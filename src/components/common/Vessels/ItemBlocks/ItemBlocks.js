import styles from "./ItemBlocks.module.scss";
import React from "react";
import ItemBlock from "./ItemBlock/ItemBlock";

const ItemBlocks = ({ arrItemBlocks,
                      finishArr,
                      clearArr,
                    }) => {
  console.log(arrItemBlocks)
  let classActive = '';
  if (arrItemBlocks.length > 0) {
    classActive = `${styles.active}`
  }
  return (
    <div className={styles.itemBlocks}>
      <ItemBlock arrItemBlocks={arrItemBlocks}
                 finishArr={finishArr}
      />
      <div className={`${styles.verticalLine} ${classActive}`}></div>
      <button type={"button"}
              className={`${styles.btnClearFilters} ${classActive}`}
              onClick={() => clearArr}
      >Clear Filters
      </button>
    </div>
  )
}

export default ItemBlocks;
