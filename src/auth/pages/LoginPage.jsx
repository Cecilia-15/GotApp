import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo } from "react";
import '../../styles.css'

const initialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm(initialForm)

  const onSubmit = (even) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(startLoginWithEmailAndPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');

    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <div className='login'>
      <form onSubmit={onSubmit} className='animate_animated animate_fadeIn' >
        <Grid item xs={12} sx={{ mt:2 }} >
          <TextField 
            label="Email"
            type="email"
            placeholder="email@gmail.com"
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }} >
          <TextField
            label="Password"
            type="password"
            placeholder="password"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }} >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <Button
              variant="contained"
              fullWidth
              type='submit'
              disabled={isChecking} 
            >
              <Typography sx={{ ml: 1 }}>Login</Typography>
            </Button>
          </Grid>

        </Grid>

        <Grid container spacing={1} sx={{ mb:2, mt: 1 }} >
          <Grid item xs={12} sx={{ mt:2 }} >
            <Button
              variant="container"
              fullWidth 
              onClick={onGoogleSignIn}
              disabled={isChecking}
            >
              <Google/>
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} to="/auth/register">
            Crear una cuenta
          </Link> 
        </Grid>
      </form>
      </div>
      
    </AuthLayout>
  )
}
