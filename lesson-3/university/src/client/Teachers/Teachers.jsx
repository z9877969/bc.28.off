
import TeachersItem from "./TeachersItem";

import "./Teachers.css";

const Teachers = ({items}) => {

    const elements = items.map(({id, ...props}) => <TeachersItem key={id} {...props} />);

    return (
        <section className="teachers">
            <div className="container">
                <h2 className="teachers-title">Преподаватели</h2>
                {elements}
            </div>

        </section>
    )
};

Teachers.defaultProps = {
    items: []
}

export default Teachers;