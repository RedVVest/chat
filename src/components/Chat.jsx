import React, {useContext} from 'react';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

    const { data } = useContext(ChatContext);

    return (
        <div className='ws-chat'>
            <div className="ws-chat-info">
                <span>{data.user?.displayName}</span>
                <div className="ws-chat-icons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
};

export default Chat;