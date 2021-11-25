import { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { firebase } from '../utils/services/firebaseApi';
import {
  signUpAsync,
  signInAsync,
} from '../redux/auth/authAsyncOperations';

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
  const { auth } = firebase;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeInput =
    (name) =>
    ({ target: { value } }) =>
      setUser({ ...user, [name]: value });

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = user;
      dispatch(signUpAsync({ auth, email, password }));
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
    setUser(initialState);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = user;
      dispatch(signInAsync({ auth, email, password }));
    } catch (error) {
      alert('Something went wrong. Check input data');
    }
    setUser(initialState);
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
