import React from 'react';
import Stream from '../../../components/StreamBox/StreamBox'
import Chat from '../../../components/ChatBox/ChatBox'
import classes from './Quad.module.scss';
import { connect } from 'react-redux'

const Quad = (props) => {
    if (!props.sources && !props.layout) {
        props.history.replace('/')
        return null
    } else {
        const four_fields = (
            <div className={classes.FourFiels}>
                <Stream id={1} type={props.sources[0].service} src={props.sources[0].src} />
                <Stream id={2} type={props.sources[1].service} src={props.sources[1].src} />
                <Stream id={3} type={props.sources[2].service} src={props.sources[2].src} />
                <Stream id={3} type={props.sources[3].service} src={props.sources[3].src} />
            </div>
        )
        const four_fields_one_chat = (
            <div className={classes.FourFielsOneChat}>
                <Stream id={1} type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "streamA" }} />
                <Stream id={2} type={props.sources[1].service} src={props.sources[1].src} style={{ "grid-area": "streamB" }} />
                <Stream id={3} type={props.sources[2].service} src={props.sources[2].src} style={{ "grid-area": "streamC" }} />
                <Stream id={3} type={props.sources[3].service} src={props.sources[3].src} style={{ "grid-area": "streamD" }} />
                <Chat id={2} type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "chat" }} />
            </div>
        )
        let layout = null
        switch (props.layout) {
            case "four_fields":
                layout = four_fields
                break;
            case "four_fields_one_chat":
                layout = four_fields_one_chat
                break;
            default:
                props.history.replace('/')
        }
        return (

            <div className={classes.Quad}>
                {layout}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sources: state.sources,
        layout: state.layout
    }
}

export default connect(mapStateToProps)(Quad);