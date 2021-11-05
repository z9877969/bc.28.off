import styles from "./MainMenuItem.module.scss";

const MainMenuItem = ({ link, name }) => {
    return (
        <li className={styles.item}>
            <a href={link} className={styles.link}>
                {name}
            </a>
        </li>
    )
};

export default MainMenuItem;
