import DoneIcon from '@material-ui/icons/Done';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import ClearIcon from '@material-ui/icons/Clear';
import {useMessage} from "../hoc/useMessage";
import './styles/Message.css';

export const Message = ({message}) => {
    const {_id, messageCode, text} = message;
    const {hideMessage} = useMessage();

    let className = 'page-message ';
    let icon = <DoneIcon/>;

    switch (messageCode) {
        case 'error':
            className += 'error';
            icon = <ErrorOutlineIcon/>;
            break;
        case 'warning':
            className += 'warning';
            icon = <WarningIcon/>;
            break;
        case 'success':
            className += 'success';
            icon = <DoneIcon/>;
            break;
        default:
            break;
    }

    return (
        <div className={className}>
            <span className={'icon message-icon'}>
                {icon}
            </span>
            {text}
            <span className={'icon clear-icon'} onClick={hideMessage.bind(this, _id)}>
                <ClearIcon/>
            </span>
        </div>
    )
}