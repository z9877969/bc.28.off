import PropTypes from 'prop-types';

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
                {contacts.linkedIn && (
                    <li>
                        {contacts.linkedIn}
                    </li>
                )}   
            </ul>
            <p className="teachers-item-column">
                {work}
            </p>
        </div>
    )
}

export default TeachersItem;

TeachersItem.propTypes = {
    name: PropTypes.string.isRequired,
    contacts: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        linkedIn: PropTypes.string
    }).isRequired,
    work: PropTypes.string.isRequired
}