import React from 'react';
import classes from './Field.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';

const Field = (props) => {
    let icon = null
    switch (props.service) {
        case "twitch":
            icon = <Fade><FontAwesomeIcon icon={['fab', 'twitch']} color="#65469c" /></Fade>
            break;
        case "youtube":
            icon = <Fade><FontAwesomeIcon icon={['fab', 'youtube']} color="#cd201f" /></Fade>
            break;
        default:
            icon = null
            break;
    }

    return (
        <div className={classes.Field}>
            <div className={classes.Icon}>{icon}</div>
            <input
                type="text"
                className={!props.valid && props.value.length > 0 ? classes.Invalid : null}
                placeholder="YouTube/Twitch.tv link"
                value={props.value}
                onChange={(e) => props.change(e, props.id)}
                service={props.service}
            />
        </div >
    );
}

export default Field;