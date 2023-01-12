import React from "react";

//assets
import styles from "./List2.module.scss";

export const List2 = (
  {
    arrItemsList2Symbol,
    arrItemsList2Title,
    valueList1,
    clickList2,
  }) => {
  return (
    <ul className={styles.list2}>
      <li>Use:"{valueList1}"</li>
      <li><h2>Operators</h2></li>
      {arrItemsList2Symbol.map((symbol, index) => (
          <li
            key={symbol}
            onClick={() => clickList2(symbol)}>
            <div>
              <span className={styles.title}>
                {valueList1}
              </span>
              <span>{symbol}</span>
            </div>
            <span>{arrItemsList2Title[index]}</span>
          </li>
        )
      )}
    </ul>
  )
}

