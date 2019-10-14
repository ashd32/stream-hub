import React from 'react';
import classes from '../../global/Box.module.scss';

const ChatBox = ({ id, type, src, style }) => {

    let chat = null
    switch (type) {
        case "youtube":
            chat = <iframe title={src} src={`https://www.youtube.com/live_chat?v=${src}&amp;embed_domain=${window.location.hostname}`} frameBorder="0"></iframe>
            break;
        case "twitch":
            chat = <iframe title={src} src={`https://www.twitch.tv/embed/${src}/chat?darkpopout`} scrolling="no" frameBorder="0"></iframe>
            break;
        default:
            break;
    }

    return (
        <div className={classes.Box} style={style}>
            {chat}
        </div>
    );
}

export default ChatBox;