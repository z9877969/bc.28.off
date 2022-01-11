import {createAction} from '@reduxjs/toolkit';
import { v4 } from "uuid";

export const addToDo = createAction("todo/add", (todo) => {
    return {
        payload: {
            ...todo,
            id: v4()
        }
    }
})
export const removeTodo = createAction("todo/remove")