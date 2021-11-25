import { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { firebase } from '../utils/services/firebaseApi';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  formControl: {
    minWidth: '100%',
    marginTop: '2vh',
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
  },
  authNavigateText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
  },
}));

const initialState = { email: '', password: '' };

const AuthPage = () => {
  const [user, setUser] = useState(initialState);
  const [flag, setFlag] = useState(true);
  const {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } = firebase;
  const classes = useStyles();

  const handleChangeInput =
    (name) =>
    ({ target: { value } }) =>
      setUser({ ...user, [name]: value });

  const onRegister = async (e) => {
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
      alert('Something went wrong. Check input data');
    }
    setUser(initialState);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('user :>> ', user);
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
    setUser(initialState);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
  };

  const navigateAuth = () => setFlag(!flag);

  return (
    <Container
      component='main'
      maxWidth='xs'
      className={classes.paper}>
      <h1>{flag ? 'REGISTER' : 'LOGIN'}</h1>
      <Grid item xs={12}>
        <FormControl
          variant='outlined'
          className={classes.formControl}>
          <TextField
            autoComplete={user.email || 'Email'}
            name='email'
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email'
            value={user.email}
            onChange={handleChangeInput('email')}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          variant='outlined'
          className={classes.formControl}>
          <TextField
            autoComplete={user.password || 'Password'}
            name='password'
            variant='outlined'
            required
            fullWidth
            id='password'
            label='Password'
            value={user.password}
            onChange={handleChangeInput('password')}
          />
        </FormControl>
      </Grid>
      <div className={classes.buttonsWrapper}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={flag ? onRegister : onLogin}>
          {flag ? 'REGISTER' : 'LOGIN'}
        </Button>
        <div
          className={classes.authNavigateText}
          onClick={navigateAuth}>
          <p>{flag ? 'go login >>' : 'go register >>'}</p>
        </div>
      </div>
    </Container>
  );
};

export default AuthPage;
