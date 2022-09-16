import React, { useState } from "react";
import { PokedexContext } from "./PokedexContext";

const init = () => {
  let page = localStorage.getItem("pokedexPage");
  page = page ? parseInt(page, 10): 1;
  return page;
};

export const PokedexProvider = ({ children }) => {
  const [page, setPage] = useState(init);
  const onChangePage = (newPage = 1) => {
    localStorage.setItem("pokedexPage", newPage);
    setPage(newPage);
  };
  const resetPage = () =>{
    localStorage.removeItem('pokedexPage');
    setPage(1);
  }
  return (
    <PokedexContext.Provider
      value={{
        //props
        page,
        //methods
        onChangePage: onChangePage,
        resetPage: resetPage,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
