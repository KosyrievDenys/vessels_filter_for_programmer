import styles from "./SearchFilters.module.scss";
import React from "react";

const SearchFilters = ({
                         getValue,
                         inputValue
                       }) => {
  return (
    <input onChange={(e) => getValue(e)}
           value={inputValue} type='text'
           placeholder={'Search for vessels by attribute...'}
           className={styles.searchFilters} />
  )
}

export default SearchFilters;
