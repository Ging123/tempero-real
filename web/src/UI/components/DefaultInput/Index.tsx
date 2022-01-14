import './styles.scss';

interface props {
  icone?:JSX.Element;
  margin?:string;
  maxLength?:number;
  minLength?:number;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
  required?:boolean;
  type?:"email"|"number"|"password"|"text";
  value:number|string;
}

const DefaultInput = (props:props) => {
  const style = { margin:props.margin };

  return (
    <div className='default-input-container' style={ style }>
      { props.icone }
      <input
        className="default-input"
        maxLength={ props.maxLength }
        minLength={ props.minLength }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        required={ props.required }
        type={ props.type }
        value={ props.value }
      />
    </div>
  );
}

export default DefaultInput;