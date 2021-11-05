import "./MenuItem.css";

const MenuItem = ({href, name})=> {
    return (
        <li>
            <a href={href}>{name}</a>
        </li>
    )
}

export default MenuItem;