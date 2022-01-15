import { FormEvent, useState } from 'react'
import DefaultForm from '../DefaultForm/Index';
import DefaultInput from '../DefaultInput/Index';
import { FaUser, FaLock } from 'react-icons/fa';
import DefaultButton from '../DefaultButton/Index';
import LoginUseCase from '../../../domain/use_cases/user/login/useCase';

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const user = new LoginUseCase();

  async function send(e:FormEvent) {
    try {
      e.preventDefault();
      await user.login(emailOrUsername, password);
    }
    catch(err:any) {
      setError(err);
    }
  }
  
  return (
    <DefaultForm error={ error } onSubmit={(e) => send(e)}>
      <DefaultInput
        icone={<FaUser />}
        maxLength={100}
        onChange={(e) => setEmailOrUsername(e.target.value)}
        placeholder="Email ou nome de usuário"
        required={true}
        value={ emailOrUsername }
      />
      <DefaultInput
        icone={ <FaLock /> }
        margin="10px 0px 12px 0px"
        maxLength={30}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required={true}
        type="password"
        value={ password }
      />
      <DefaultButton
        content="Entrar"
        type="submit"
        margin='0px 0px 15px 0px'
      />
    </DefaultForm>
  )
}

export default LoginForm;