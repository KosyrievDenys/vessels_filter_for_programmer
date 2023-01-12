import React from "react";

// assets
import styles from "./SearchFilters.module.scss";

export const SearchFilters = (
  {
    getValue,
    inputValue
  }) => {
  return (
    <input
      onChange={(e) => getValue(e.target.value)}
      value={inputValue}
      type='text'
      placeholder={'Search for vessels by attribute...'}
      className={styles.searchFilters} />
  )
}