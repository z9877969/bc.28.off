import {Component} from "react";

class List extends Component {
    state = {
        products: [
            {
                id: "1",
                name: "iPhone X"
            },
            {
                id: "2",
                name: "GeFore 3090"
            },
            {
                id: "3",
                name: "Ferarri Enzo"
            },
        ]
    }

    onDelete = (idx)=> {
        this.setState(({products})=> {
            const newProducts = products.filter((_, index)=> index !== idx);
            return {
                products: newProducts
            }
        });
        /*
        if(callback){
            const result = callback(actualState);
            this.state = Object.assign(actualState, result)
        }
        */
    }

    render(){
        const {products} = this.state;
        const {onDelete} = this;

        const elements = products.map((item, index) => (
            <li key={item.id}>{item.name} <button onClick={()=>onDelete(index)}>Удалить</button></li>
        ));

        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

export default List;