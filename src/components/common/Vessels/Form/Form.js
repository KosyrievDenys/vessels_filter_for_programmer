import React from "react";
import styles from './Form.module.scss';
import SearchFilters from "./Input/SearchFilters";
import List2 from "./List2/List2";
import List1 from "./List1/List1";

const Form = ({
                arrItemsList1,
                arrItemsList2Title,
                arrItemsList2Symbol,
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
    <form className={styles.form}
          onSubmit={(e) => activeForm(e)}>
      <SearchFilters getValue={getValue}
                     inputValue={inputValue}
      />
      <List1 arrItemsList1={arrItemsList1}
             isOpenList1={isOpenList1}
             clickList1={clickList1}
      />
      <List2 arrItemsList2Symbol={arrItemsList2Symbol}
             arrItemsList2Title={arrItemsList2Title}
             valueList1={valueList1}
             isOpenList2={isOpenList2}
             clickValueList1={clickList1}
             clickList2={clickList2}
      />
    </form>
  )
}

export default Form;
