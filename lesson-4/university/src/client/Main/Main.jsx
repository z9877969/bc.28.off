import Teachers from "../Teachers";
import Cities from "../Cities";

import Section from "../../shared/components/Section";

import teachers from "../../data/teachers.json";

import "./Main.css";

const Main = ()=>{

    return (
        <main>
            <Section title="Преподаватели">
                <Teachers items={teachers} title="Секция" />
                <Cities />
            </Section>
        </main>
    )
}

export default Main;