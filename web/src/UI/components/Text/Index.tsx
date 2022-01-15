import './styles.scss';

type text = 'error'|'highlight'|'sub-title'|'text'|'title'|'small';
type display = 'block'|'inline'|'inline-block';

interface props {
  children?:React.ReactNode;
  className?:string;
  content?:string;
  display?:display;
  margin?:string;
  onClick?:() => void;
  type?:text;
}

const Text = (props:props) => {
  const style = { display:props.display, margin:props.margin };
  const type = props.type || 'text';
  const classes = `${type} ${props.className || ''}`;

  return (
    <div className={ classes } style={ style } onClick={ props.onClick }>
      { props.content }
      { props.children }
    </div>
  )
}

export default Text