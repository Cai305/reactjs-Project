import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  return (
    <Link 
        to={props.url}
        tooltip={props.tooltip_message}
        icon={props.icon}>
     </Link>
  )
}

export default LinkButton