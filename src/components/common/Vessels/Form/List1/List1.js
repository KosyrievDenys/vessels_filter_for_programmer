import styles from "./List1.module.scss";
import React from "react";

const List1 = ({
                 arrItemsList1,
                 isOpenList1,
                 clickList1
               }) => {
  return (
    isOpenList1 && <ul className={styles.list1}>
      <li><h2>Search Filters</h2></li>
      {arrItemsList1.map((el) => (
          <li
            key={el}
            onClick={() => clickList1(el)}
          >
            <span>{el}</span>
          </li>
        )
      )}
    </ul>
  )
}

export default List1;
