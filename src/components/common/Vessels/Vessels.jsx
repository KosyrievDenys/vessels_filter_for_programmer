import React, { useState } from 'react';

// components
import { Form, ItemBlocks } from "./components";

// assets
import styles from './Vessels.module.scss';

export const Vessels = () => {
  const [inputValue, setInputValue] = useState('');
  const [valueList1, setValueList1] = useState('');
  const [valueList2, setValueList2] = useState('');
  const [isOpenList1, setIsOpenList1] = useState(true);
  const [isOpenList2, setIsOpenList2] = useState(false);
  const [arrItemBlocks, setArrItemBlocks] = useState([]);

  const getValue = (valueInput) => {
    setInputValue(valueInput);
    if (!valueInput.includes(valueList1)) {
      setIsOpenList1(true)
      setIsOpenList2(false)
    } else if (!valueInput.includes(valueList2)) {
      setIsOpenList2(true)
      setIsOpenList1(false)
    }
  }

  const clickList1 = (title) => {
    setInputValue(title);
    setValueList1(title);
    setIsOpenList1(false);
    setIsOpenList2(true);
  }

  const clickList2 = (symbol) => {
    setValueList2(symbol);
    setIsOpenList2(false);
    setInputValue(`${valueList1} ${symbol}`);
  }

  const activeForm = (e) => {
    e.preventDefault();
    setIsOpenList1(true);
    let str = '';
    if (inputValue.includes('=')) {
      str = inputValue.split('=');
    } else if (inputValue.includes(':')) {
      str = inputValue.split(':');
    }
    console.log(arrItemBlocks)
    setArrItemBlocks(
      [...arrItemBlocks, {
        title: valueList1,
        value: ` ${valueList2} "${str[1]}"`
      }
      ]);
    setInputValue('');
  }

  const finishArr = (arr) => {
    let newArr = [
      ...arrItemBlocks.slice(0, arr),
      ...arrItemBlocks.slice(arr + 1),
    ];
    setArrItemBlocks(newArr);
  }

  const clearArr = () => {
    setArrItemBlocks([]);
  }

  return (
    <div className={styles.vessels}>
      <div className={styles.container}>
        <Form
          getValue={getValue}
          inputValue={inputValue}
          valueList1={valueList1}
          clickList1={clickList1}
          clickList2={clickList2}
          isOpenList1={isOpenList1}
          isOpenList2={isOpenList2}
          activeForm={activeForm}
        />
        <ItemBlocks
          arrItemBlocks={arrItemBlocks}
          finishArr={finishArr}
          clearArr={clearArr}
        />
      </div>
    </div>
  );
}
