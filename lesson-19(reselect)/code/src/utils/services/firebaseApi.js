import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// https://[PROJECT_ID].firebaseio.com/message_list.json

axios.defaults.baseURL =
  'https://bc11-7c3e8-default-rtdb.firebaseio.com/';

export const addTodoApi = (todo) => {
  return axios
    .post('/todos.json', todo)
    .then(({ data }) => ({ ...todo, id: data.name }))
    .catch((err) => {
      throw err;
    });
};

export const getTodosApi = () => {
  return axios
    .get('/todos.json')
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const removeTodoApi = (id) => {
  return axios
    .delete('/todos/' + id + '.json') // null
    .then(() => id) // data = null
    .catch((err) => {
      throw err;
    });
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVuc4UxSgkkEqIwUiO6j0kOSn1qEKgcHo',
  authDomain: 'bc11-4527e.firebaseapp.com',
  projectId: 'bc11-4527e',
  storageBucket: 'bc11-4527e.appspot.com',
  messagingSenderId: '949579986113',
  appId: '1:949579986113:web:fe74c795b6a872471c5040',
  measurementId: 'G-SV00XP4M7W',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const firebase = {
  auth,
  createUserWithEmailAndPassword,
};
