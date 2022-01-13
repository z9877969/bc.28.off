import {createSlice} from '@reduxjs/toolkit';

export const options = [
    {
      value: "ru",
      title: "Рус",
    },
    {
      value: "en",
      title: "Eng",
    },
  ];

const langSlice = createSlice({
    name: "lang",
    initialState: options[0].value,
    reducers: {
        changeLang(_, {payload}){
            return payload
        }
    }
})

export const {changeLang} = langSlice.actions
export default langSlice.reducer