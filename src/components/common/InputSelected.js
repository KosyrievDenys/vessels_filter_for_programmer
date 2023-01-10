import React, { useState, useEffect } from 'react';
import styles from './InputSelected.module.scss';

const InputSelected = () => {
  const arrItemsList = ['Vessel ID', 'Name', 'State', 'Queue', 'Docker Image', 'GPUs', 'GPU Utilisation', 'GPU Memory', 'Created At'];
  const arrItemsTitle = ['Equals', 'Does not equal', 'Contains', 'Does not contain'];
  const arrItemsSymbol = ['=', '!=', ':', '!:'];
  const [stItemValue, setStItemValue] = useState('');
  const [stItemTitle, setStItemTitle] = useState('');
  const [stItemSymbol, setStItemSymbol] = useState('');
  const [stIsOpenList1, setStIsOpenList1] = useState(true);
  const [stIsOpenList2, setStIsOpenList2] = useState(false);
  const [stArrItemBlocks, setStArrItemBlocks] = useState([]);
  // console.log('item', stItemValue)
  // console.log('arr', arrItemBlocks)
  // if (stItemValue.length > 0) setIsOpenList1(false);
  // console.log('global')
  // console.log(stItemValue.length === 0)
  // useEffect(() => {
  // },[stItemValue])
  // console.log(arrItemBlocks, 'arr')
  console.log(stItemTitle)
  console.log(stItemSymbol)
  console.log(stArrItemBlocks)
  const itemBlocks =
    stArrItemBlocks.map((el, id) => {
      return (
        <div className={styles.itemBlock}>
          <div>
            <span>{el[0]}</span>
            {/*<span>{el[id][1]}</span>*/}
            <span>{el[1]}</span>
          </div>
          <span
            className={styles.close}
            onClick={()=>{

            }}
          >x</span>
        </div>
      )
    })


  return (
    <div className={styles.inputSelected}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form onSubmit={(e) => {
            // console.log(stItemValue)
            e.preventDefault();
            let elementsStr = stItemValue.split('=')||stItemValue.split(':');
            // console.log(`${elementsStr[0]}="${elementsStr[1]}"`)
            // let str1 = `${elementsStr[0]}`;
            let str2 = ` ${stItemSymbol} "${elementsStr[1]}"`;
            console.log(str2)
            setStArrItemBlocks([...stArrItemBlocks, [stItemTitle, str2]]);
            setStItemValue('');
            // setArrItemBlocks(...arrItemBlocks, stItemValue);
            // createItemBlock();
          }}>
            <input onChange={(e) => {
              setStItemValue(e.target.value)
              // console.log('target',e.target.value)
            }} value={stItemValue} type='text'

                   placeholder={'Search for vessels by attribute...'}
                   className={styles.input} />
            <div className={styles.itemBlocks}>
              {itemBlocks}
            </div>
            {stIsOpenList1 && <ul className={styles.list1}>
              <li><h2>Search Filters</h2></li>
              {arrItemsList.map((el) => {
                return (
                  <li
                    key={el}
                    onClick={() => {
                      // console.log('1')
                      setStItemValue(el);
                      setStItemTitle(el)
                      setStIsOpenList1(false);
                      setStIsOpenList2(true);
                    }}>
                    <span>{el}</span>
                  </li>
                )
              })}
            </ul>}
            {stIsOpenList2 && <ul className={styles.list2}>
              <li>Use:"{stItemValue}"</li>
              <li><h2>Operators</h2></li>
              {arrItemsSymbol.map((el, id) => {
                return (
                  <li
                    key={el}
                    onClick={() => {
                      // console.log('2')
                      setStItemValue(`${stItemValue} ${el}`);
                      setStItemSymbol(el);
                      // setIsOpenList1(true);
                      setStIsOpenList2(false);
                    }}>
                    <div><span className={styles.title}>{stItemValue}</span><span>{el}</span></div>
                    <span className={styles.description}>{arrItemsTitle[id]}</span>
                  </li>
                )
              })}
            </ul>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputSelected;

