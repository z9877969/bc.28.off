import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";

import {items} from "./items";

const Menu = ()=> {
    const menuElements = items.map(item => <MenuItem key={item.id} {...item}  />);
    // const menuElements = items.map(({id, ...props}) => <MenuItem key={id} {...props}  />);

    return (
        <ul className={styles.menu}>
           {menuElements}
        </ul>
    )
}

export default Menu;