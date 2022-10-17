import { Routes, Route, Navigate } from 'react-router-dom';
import { CheckingAuth } from '../auth/components/CheckingAuth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { GotRoutes } from '../got/routes/GotRoutes'

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if(status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {
        status === 'authenticated'
        ? <Route path='/*' element={<GotRoutes/>} />
        : <Route path='/auth/*' element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/auth/login'/>} />
    </Routes>
  )
}                        
