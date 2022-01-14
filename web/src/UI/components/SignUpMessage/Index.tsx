import { useNavigate } from "react-router-dom";
import Text from "../Text/Index";

const SignUpMessage = () => {
  const navigate = useNavigate();
  const goToSignUpPage = () => navigate('/signup');

  return (
    <Text content="Não tem uma conta ?" margin="15px 0px" type="small">
      <Text 
        content=" Crie uma" 
        display="inline"
        onClick={() => goToSignUpPage()}
        type="highlight"
      />
    </Text>
  )
}

export default SignUpMessage;