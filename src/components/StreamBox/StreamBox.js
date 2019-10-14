import React from 'react';
import classes from '../../global/Box.module.scss';

const StreamBox = ({ type, src, style }) => {
    let player = null
    switch (type) {
        case "youtube":
            player = <iframe title={src} src={`https://www.youtube.com/embed/${src}?autoplay=1`} frameBorder="0" data-params={'data-params="modestbranding=1&showinfo=0'}></iframe>
            break;
        case "twitch":
            player = <iframe title={src} src={`https://player.twitch.tv/?channel=${src}`} scrolling="no" frameBorder="0"></iframe>
            break;
        default:
            break;
    }

    return (
        <div className={classes.Box} style={style}>
            {player}
        </div>
    );
}

export default StreamBox;