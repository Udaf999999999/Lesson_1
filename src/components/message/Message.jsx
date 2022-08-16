import './Message.css';
import { AUTHOR } from '../../constants';

export const Message = ({ author, text }) => {

    const msgAuthorType = author === AUTHOR ? 'user' : 'bot';

    return (
        <div 
            className={`${msgAuthorType} message`}
        >
            <span 
                className="author"
            >
                {author}
            </span>
            <span 
                className="text"
            >
                {text}
            </span>
        </div>
    )

}