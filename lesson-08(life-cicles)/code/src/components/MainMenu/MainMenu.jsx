import React, { Component } from "react";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.scss";

class MainMenu extends Component {
  state = {
    prop: "654654",
    isShowList: true,
  };  

  render() {
    const { items } = this.props;
    return this.state.isShowList ? (
      <ul className={styles.menu}>
        {items.map((item) => {
          return <MainMenuItem key={item.id} {...item} />;
        })}
      </ul>
    ) : (
      <h1>MainTitle</h1>
    );
  }
}

export default MainMenu;
