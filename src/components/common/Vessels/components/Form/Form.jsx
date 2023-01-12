import React from "react";

// components
import { SearchFilters, List1, List2 } from "./components";

// assets
import styles from './Form.module.scss';

const arrItemsList1 = ['Vessel ID', 'Name', 'State', 'Queue', 'Docker Image', 'GPUs', 'GPU Utilisation', 'GPU Memory', 'Created At'];
const arrItemsList2Title = ['Equals', 'Does not equal', 'Contains', 'Does not contain'];
const arrItemsList2Symbol = ['=', '!=', ':', '!:'];

export const Form = (
  {
    getValue,
    inputValue,
    valueList1,
    isOpenList1,
    isOpenList2,
    clickList1,
    clickList2,
    activeForm,
  }) => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => activeForm(e)}>
      <SearchFilters
        getValue={getValue}
        inputValue={inputValue}
      />
      {isOpenList1 && <List1
        arrItemsList1={arrItemsList1}
        clickList1={clickList1}
      />}
      {isOpenList2 && <List2
        arrItemsList2Symbol={arrItemsList2Symbol}
        arrItemsList2Title={arrItemsList2Title}
        valueList1={valueList1}
        clickValueList1={clickList1}
        clickList2={clickList2}
      />}
    </form>
  )
}