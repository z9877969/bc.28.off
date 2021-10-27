import Teachers from "../Teachers";

import "./Main.css";

import teachers from "../../data/teachers.json";

const Main = ()=>{

    return (
    <main>
        <Teachers items={teachers} />
    </main>
    )
}

export default Main;