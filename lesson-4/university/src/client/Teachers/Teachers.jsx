import PropTypes from "prop-types";

import Button from "../../shared/components/Button";
import TeachersItem from "./TeachersItem";

import "./Teachers.css";

const Teachers = ({items}) => {
    const elements = items.map(({id, ...props}) => <TeachersItem key={id} {...props} />);
    // const elements = items.map(([value1, value2]) => <TeachersItem value1={value1} />);
    // <TeachersItem key={id} name={props.name} contacts={props.contacts} work={props.work} />
    // TeachersItem({name: props.name, contacts: props.contacts, work: props.work})
    // const elements = items.map(item => <TeachersItem key={item.id} {...item} />);
    
    // id, props = {name, contacts, work}
    return (
        <>
            {elements}
            <Button text="Добавить преподавателя" />
        </>
    )
};

Teachers.defaultProps = {
    items: []
}

Teachers.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        contacts: PropTypes.shape({
            phone: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            linkedIn: PropTypes.string
        }).isRequired,
        work: PropTypes.string.isRequired
    }))
}

export default Teachers;