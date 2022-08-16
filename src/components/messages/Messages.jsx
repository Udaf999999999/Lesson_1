import { Message } from "../message/Message";
import './Messages.css';

export const Messages = ({ messageList }) => {
    return (
        <div className="messages">
            {
                messageList.map((message) => {
                    const { id, ...otherProps } = message;
                    return <Message key={id} {...otherProps} />
                })
            }
        </div>
    )
}

Messages.defaultProps = {
    messageList: []
};
