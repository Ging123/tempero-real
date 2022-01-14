import { Routes as Endpoints, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./UI/pages/Login/Index'));
const SignUp = lazy(() => import('./UI/pages/SignUp/Index'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Carregando :)</div>}>
      <Endpoints>
        <Route element={<Login/>} path="/"/>
        <Route element={<SignUp/>} path="/signup"/>
      </Endpoints>
    </Suspense>
  );
}

export default Routes;