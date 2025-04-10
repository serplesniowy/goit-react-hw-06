import React from 'react'
import styles from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search" className={styles.searchLabel}>Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder=""
        className={styles.searchBox}
      />
    </div>
  )
}

export default SearchBox


