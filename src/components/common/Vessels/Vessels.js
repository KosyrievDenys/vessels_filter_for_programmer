import React, { useState } from 'react';
import styles from './Vessels.module.scss';
import Form from "./Form/Form";
import ItemBlocks from "./ItemBlocks/ItemBlocks";

const Vessels = () => {
  const arrItemsList1 = ['Vessel ID', 'Name', 'State', 'Queue', 'Docker Image', 'GPUs', 'GPU Utilisation', 'GPU Memory', 'Created At'];
  const arrItemsList2Title = ['Equals', 'Does not equal', 'Contains', 'Does not contain'];
  const arrItemsList2Symbol = ['=', '!=', ':', '!:'];
  const [inputValue, setInputValue] = useState('');
  const [valueList1, setValueList1] = useState('');
  const [valueList2, setValueList2] = useState('');
  const [isOpenList1, setIsOpenList1] = useState(true);
  const [isOpenList2, setIsOpenList2] = useState(false);
  // const [strBlock, setStrBlock] = useState('');
  const [arrItemBlocks, setArrItemBlocks] = useState([]);
  const getValue = (e) => {
    setInputValue(e.target.value);
    if (!e.target.value.includes(valueList1)) {
      setIsOpenList1(true)
      setIsOpenList2(false)
    } else if (!e.target.value.includes(valueList2)) {
      setIsOpenList2(true)
      setIsOpenList1(false)
    }
  }
  const clickList1 = (el) => {
    setInputValue(el);
    setValueList1(el);
    setIsOpenList1(false);
    setIsOpenList2(true);
  }
  const clickList2 = (el) => {
    setValueList2(el);
    setIsOpenList2(false);
    setInputValue(`${valueList1} ${el}`);
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
    // setStrBlock(`${valueList1} ${valueList2} "${str[1]}"`)
    setArrItemBlocks([...arrItemBlocks, [`${valueList1} ${valueList2} "${str[1]}"`]]);
    setInputValue('');
  }
  const finishArr = (id) => {
    let newArr = [
      ...arrItemBlocks.slice(0, id),
      ...arrItemBlocks.slice(id + 1),
    ];
    setArrItemBlocks(newArr);
  }
  const clearArr = () => {
    setArrItemBlocks([]);
  }
  return (
    <div className={styles.vessels}>
      <div className={styles.container}>
        <Form arrItemsList1={arrItemsList1}
              arrItemsList2Title={arrItemsList2Title}
              arrItemsList2Symbol={arrItemsList2Symbol}
              getValue={getValue}
              inputValue={inputValue}
              valueList1={valueList1}
              clickList1={clickList1}
              clickList2={clickList2}
              isOpenList1={isOpenList1}
              isOpenList2={isOpenList2}
              activeForm={activeForm}
        />
        <ItemBlocks arrItemBlocks={arrItemBlocks}
                    finishArr={finishArr}
                    clearArr={clearArr} />
      </div>
    </div>
  );
}

export default Vessels;

