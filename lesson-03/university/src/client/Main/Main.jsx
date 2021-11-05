import Teachers from "../Teachers";

import "./Main.css";
import Section from "../../shared/components/Section";
import teachers from "../../data/teachers.json";

const Main = ()=>{

    return (
        <main>
            <Section title="Преподаватели">
                <Teachers items={teachers} title="Секция" />
                {/* Teachers({items: teachers, title: "Секция"}) */}
            </Section>
        </main>
    )
}

export default Main;