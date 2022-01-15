import { FormEvent, useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import DefaultButton from '../DefaultButton/Index';
import DefaultForm from '../DefaultForm/Index';
import DefaultInput from '../DefaultInput/Index';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function send(e:FormEvent) {
    e.preventDefault();
  }

  return (
    <DefaultForm error={ error } onSubmit={(e) => send(e)}>
      <DefaultInput
        icone={<MdEmail />}
        maxLength={100}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email ou nome de usuário"
        required={true}
        value={ email }
      />
      <DefaultInput
        icone={<FaUser />}
        maxLength={30}
        onChange={(e) => setUsername(e.target.value)}
        margin="10px 0px"
        placeholder="Nome de usuário"
        required={true}
        value={ username }
      />
      <DefaultInput
        icone={<FaLock />}
        maxLength={30}
        minLength={7}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required={true}
        value={ password }
      />
      <DefaultButton
        content="Cadastrar-se"
        type="submit"
        margin='12px 0px'
      />
    </DefaultForm>
  )
}

export default SignUpForm;