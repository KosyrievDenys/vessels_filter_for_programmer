import React from "react";

// assets
import styles from "./List1.module.scss";

export const List1 = (
  {
    arrItemsList1,
    clickList1
  }) => {
  return (
    <ul className={styles.list1}>
      <li><h2>Search Filters</h2></li>
      {arrItemsList1.map((title) => (
          <li
            key={title}
            onClick={() => clickList1(title)}
          >
            <span>{title}</span>
          </li>
        )
      )}
    </ul>
  )
}

