import React from "react";
import classes from "./SearchBox.module.scss";
import { ReactComponent as Magnifier } from "assets/icons/magnifier.svg";
import { useTranslation } from "react-i18next";
const SearchBox = ({searchText , setSearchText}) => {
  console.log(searchText);
  const { t } = useTranslation();
  return (
    <div className={classes.SearchBoxContainer}>
      <div className={classes.wrapper}>
        <Magnifier className={classes.magnifier} />
        <input
          id="search-input"
          type="text"
          autoComplete="off"
          name="search-input"
          className={classes.searchInput}
          placeholder={t("search")}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
