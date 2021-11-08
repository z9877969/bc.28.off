import React, { Component } from "react";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.scss";
import { useToDoContext } from "../ToDoProvider/ToDoProvider";

const MainMenu = ({ items }) => {
  const { lang, setLang } = useToDoContext();

  return (
    <>
      <ul className={styles.menu}>
        {items.map((item) => {
          return <MainMenuItem key={item.id} {...item} />;
        })}
      </ul>
      <select
        onChange={(e) => setLang(e.target.value)}
        name="lang"
        value={lang}
      >
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </select>
    </>
  );
};

export default MainMenu;
