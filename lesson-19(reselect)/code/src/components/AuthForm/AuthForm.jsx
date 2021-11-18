import React, { useState } from 'react';
import { firebase } from '../../utils/services/firebaseApi';

const initialState = { email: '', password: '' };

const AuthForm = () => {
  const [user, setUser] = useState(initialState);
  const { auth, createUserWithEmailAndPassword } = firebase;

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('user :>> ', user);
    } catch (error) {
      throw error;
    }
    console.log(`user`, user);
    setUser(initialState);
  };

  const handleChangeInput =
    (name) =>
    ({ target: { value } }) =>
      setUser({ ...user, [name]: value });

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '50vw',
          margin: '0 auto',
        }}>
        <label>
          email
          <input
            name='email'
            onChange={handleChangeInput('email')}
            value={user.email}
          />
        </label>
        <label>
          password
          <input
            name='password'
            onChange={handleChangeInput('password')}
            value={user.password}
          />
        </label>
        <input type='submit' />
      </form>
    </>
  );
};

export default AuthForm;
