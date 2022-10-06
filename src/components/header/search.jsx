import React, { useRef, useState } from "react";
import styles from "./search.module.css";
const Search = ({ handleSearchKeyword }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    handleSearchKeyword(inputRef.current.value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = (e) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default Search;
