import MenuItem from "./MenuItem";

import "./Menu.css";

import {items} from "./items";

const Menu = ()=> {
    const menuElements = items.map(item => <MenuItem key={item.id} {...item}  />);
    // const menuElements = items.map(({id, ...props}) => <MenuItem key={id} {...props}  />);

    return (
        <ul>
           {menuElements}
        </ul>
    )
}

export default Menu;