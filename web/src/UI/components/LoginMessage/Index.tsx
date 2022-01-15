import { useNavigate } from 'react-router-dom';
import Text from '../Text/Index';

const LoginMessage = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => navigate('/');

  return (
    <Text content="Já tem uma conta ?" margin="15px 0px" type="small">
      <Text 
        content=" Entre aqui" 
        display="inline"
        onClick={() => goToLoginPage()}
        type="highlight"
      />
    </Text>
  )
}

export default LoginMessage;