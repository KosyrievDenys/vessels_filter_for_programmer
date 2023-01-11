import React, { useState } from 'react';
import styles from './Vessels.module.scss';

const Vessels = () => {
  const arrItemsList = ['Vessel ID', 'Name', 'State', 'Queue', 'Docker Image', 'GPUs', 'GPU Utilisation', 'GPU Memory', 'Created At'];
  const arrItemsTitle = ['Equals', 'Does not equal', 'Contains', 'Does not contain'];
  const arrItemsSymbol = ['=', '!=', ':', '!:'];
  const [inputValue, setInputValue] = useState('');
  const [valueList1, setValueList1] = useState('');
  const [valueList2, setValueList2] = useState('');
  const [isOpenList1, setIsOpenList1] = useState(true);
  const [isOpenList2, setIsOpenList2] = useState(false);
  const [arrItemBlocks, setArrItemBlocks] = useState([]);
  let classActive = '';
  if (arrItemBlocks.length > 0) {
    classActive = `${styles.active}`
  }
  const itemBlocks = arrItemBlocks.map((el, id) => (
      <div className={styles.itemBlock}>
        <div>
          <span>{el[0]}</span>
          <span>{el[1]}</span>
        </div>
        <span
          className={styles.close}
          onClick={() => {
            let newArr = [
              ...arrItemBlocks.slice(0, id),
              ...arrItemBlocks.slice(id + 1),
            ];
            setArrItemBlocks(newArr);
          }}
        >x</span>
      </div>
    )
  )
  return (
    <div className={styles.inputSelected}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form onSubmit={(e) => {
            e.preventDefault();
            setIsOpenList1(true);
            let str = '';
            if (inputValue.includes('=')) {
              str = inputValue.split('=');
            } else if (inputValue.includes(':')) {
              str = inputValue.split(':');
            }
            str = ` ${valueList2} "${str[1]}"`;
            setArrItemBlocks([...arrItemBlocks, [valueList1, str]]);
            setInputValue('');
          }}>
            <input onChange={(e) => {
              setInputValue(e.target.value);
              if (!e.target.value.includes(valueList1)) {
                setIsOpenList1(true)
                setIsOpenList2(false)
              } else if (!e.target.value.includes(valueList2)) {
                setIsOpenList2(true)
                setIsOpenList1(false)
              }
            }} value={inputValue} type='text'
                   placeholder={'Search for vessels by attribute...'}
                   className={styles.input} />
            {isOpenList1 && <ul className={styles.list1}>
              <li><h2>Search Filters</h2></li>
              {arrItemsList.map((el) => {
                return (
                  <li
                    key={el}
                    onClick={() => {
                      setInputValue(el);
                      setValueList1(el)
                      setIsOpenList1(false);
                      setIsOpenList2(true);
                    }}>
                    <span>{el}</span>
                  </li>
                )
              })}
            </ul>}
            {isOpenList2 && <ul className={styles.list2}>
              <li>Use:"{inputValue}"</li>
              <li><h2>Operators</h2></li>
              {arrItemsSymbol.map((el, id) => {
                return (
                  <li
                    key={el}
                    onClick={() => {
                      setInputValue(`${valueList1} ${el}`);
                      setValueList2(el);
                      setIsOpenList2(false);
                    }}>
                    <div><span className={styles.title}>{valueList1}</span><span>{el}</span></div>
                    <span className={styles.description}>{arrItemsTitle[id]}</span>
                  </li>
                )
              })}
            </ul>}
          </form>
          <div className={styles.itemBlocks}>
            {itemBlocks}
            <div className={`${styles.verticalLine} ${classActive}`}></div>
            <button type={"button"}
                    className={`${styles.btnClearFilters} ${classActive}`}
                    onClick={() => {
                      setArrItemBlocks([]);
                    }}
            >Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vessels;

