import styles from "./ReverseButton.module.css";

const ReverseButton = ({text})=> {
    const handleClick = ()=> {
        console.log("Button click")
    }

    return <button onClick={handleClick} className={styles.btn}>{text}</button>
}

export default ReverseButton;