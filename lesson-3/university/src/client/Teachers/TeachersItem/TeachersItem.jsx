import "./TeachersItem.css";

const TeachersItem = ({name, contacts, work}) => {
    return (
        <div className="teachers-item">
            <p className="teachers-item-column">
                {name}
            </p>
            <ul className="teachers-item-column">
                <li>
                    {contacts.phone}
                </li>
                <li>
                    {contacts.email}
                </li>
                <li>
                    {contacts.address}
                </li>
            </ul>
            <p className="teachers-item-column">
                {work}
            </p>
        </div>
    )
}

export default TeachersItem