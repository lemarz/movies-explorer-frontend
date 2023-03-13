import {Outlet, Navigate} from 'react-router-dom'

export default function ProtectedRoute({isAuth}) {
  return isAuth ? <Outlet /> : <Navigate to='/' />
}
