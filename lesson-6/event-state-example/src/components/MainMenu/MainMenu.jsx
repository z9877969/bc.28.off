import { Component } from "react";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.scss";

class MainMenu extends Component {

    render() {
        const { items } = this.props;

        const menuElements = items.map(item => {
            return (
                <MainMenuItem key={item.id} {...item} />
            )
        });

        return (
            <ul className={styles.menu}>
                {menuElements}
            </ul>
        )
    }
}

export default MainMenu;
