import { Routes as Endpoints, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./UI/pages/Login/Index'));
const SignUp = lazy(() => import('./UI/pages/SignUp/Index'));
const Product = lazy(() => import('./UI/pages/Product/Index'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Carregando :)</div>}>
      <Endpoints>
        <Route element={<Login/>} path="/"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<Product/>} path="/product"/>
      </Endpoints>
    </Suspense>
  );
}

export default Routes;