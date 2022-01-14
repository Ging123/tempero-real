import { FormEvent, useState } from 'react'
import DefaultForm from '../DefaultForm/Index';
import DefaultInput from '../DefaultInput/Index';
import { FaUser, FaLock } from 'react-icons/fa';
import DefaultButton from '../DefaultButton/Index';

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function send(e:FormEvent) {
    e.preventDefault();
  }
  
  return (
    <DefaultForm error={ error } onSubmit={(e) => send(e)}>
      <DefaultInput
        icone={<FaUser />}
        onChange={(e) => setEmailOrUsername(e.target.value)}
        placeholder="Email ou nome de usuário"
        value={ emailOrUsername }
      />
      <DefaultInput
        icone={ <FaLock /> }
        margin="10px 0px 15px 0px"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        type="password"
        value={ password }
      />
      <DefaultButton
        content="Entrar"
        type="submit"
      />
    </DefaultForm>
  )
}

export default LoginForm;