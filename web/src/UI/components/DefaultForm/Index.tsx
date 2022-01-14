import { FormEvent } from "react";
import Text from "../Text/Index";
import "./styes.scss";

interface props {
  children:React.ReactNode;
  error?:string;
  onSubmit?:(e:FormEvent) => void;
}

const DefaultForm = (props:props) => {
  return (
    <form className="default-form">
      { props.children }
      { props.error && <Text content={props.error} type="error"/> }
    </form>
  );
}

export default DefaultForm