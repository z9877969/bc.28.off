import styles from "./MenuItem.module.scss";

const MenuItem = ({href, name, active})=> {
    // const linkClassName = active ? `${styles.link} ${styles.active}` : styles.link;
    const linkClassName = active ? styles.linkActive : styles.link;
    
    return (
        <li className={styles.item}>
            <a className={linkClassName} href={href}>{name}</a>
        </li>
    )
}

export default MenuItem;