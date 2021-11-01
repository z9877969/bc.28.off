import { Component } from "react";

import styles from "./ToDoList.module.scss";

import { toDoListItems } from "../../data";

class ToDoList extends Component {
    static defaultProps = {
        items: []
    }

    state = {
        items: toDoListItems
    }

    render() {
        const { items } = this.state;

        const itemElements = items.map(item => (
            <li key={item.id}>
                {item.name}
                <span className={styles.close}>X</span>
            </li>
        ))
        return (
            <ol>
                {itemElements}
            </ol>
        )
    }
}

export default ToDoList;
