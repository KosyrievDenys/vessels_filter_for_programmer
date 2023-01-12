import styles from "./List2.module.scss";
import React from "react";

const List2 = ({
                 arrItemsList2Symbol,
                 arrItemsList2Title,
                 valueList1,
                 isOpenList2,
                 clickList2,
               }) => {
  return (
    isOpenList2 && <ul className={styles.list2}>
      <li>Use:"{valueList1}"</li>
      <li><h2>Operators</h2></li>
      {arrItemsList2Symbol.map((el, id) => (
          <li
            key={el}
            onClick={() => clickList2(el)}>
            <div><span className={styles.title}>{valueList1}</span><span>{el}</span></div>
            <span className={styles.description}>{arrItemsList2Title[id]}</span>
          </li>
        )
      )}
    </ul>
  )
}

export default List2;
