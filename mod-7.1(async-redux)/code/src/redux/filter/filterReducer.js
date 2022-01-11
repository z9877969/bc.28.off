import {createReducer} from '@reduxjs/toolkit';
import { changeFilter } from './filterActions';

const filterReducer = createReducer("all", {
    [changeFilter]: (_, {payload}) => payload
})

export default filterReducer