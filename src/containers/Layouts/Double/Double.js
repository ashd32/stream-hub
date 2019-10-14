import React from 'react';
import Chat from '../../../components/ChatBox/ChatBox'
import Stream from '../../../components/StreamBox/StreamBox'
import classes from './Double.module.scss';
import { connect } from 'react-redux'

const Double = (props) => {
    if (!props.sources && !props.layout) {
        props.history.replace('/')
        return null
    } else {
        const two_fields = (
            <div className={classes.TwoFields}>
                <Stream type={props.sources[0].service} src={props.sources[0].src} />
                <Stream type={props.sources[1].service} src={props.sources[1].src} />
            </div>
        )
        const two_fields_one_chat = (
            <div className={classes.TwoFieldsOneChat}>
                <Stream type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "streamA" }} />
                <Chat type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "chat" }} />
                <Stream type={props.sources[1].service} src={props.sources[1].src} style={{ "grid-area": "streamB" }} />
            </div>
        )
        const two_fields_two_chats = (
            <div className={classes.TwoFieldsTwoChat}>
                <Stream type={props.sources[0].service} src={props.sources[0].src} />
                <Chat type={props.sources[0].service} src={props.sources[0].src} />
                <Stream type={props.sources[1].service} src={props.sources[1].src} />
                <Chat type={props.sources[1].service} src={props.sources[1].src} />
            </div>
        )
        let layout = null
        switch (props.layout) {
            case "two_fields":
                layout = two_fields
                break;
            case "two_fields_one_chat":
                layout = two_fields_one_chat
                break;
            case "two_fields_two_chats":
                layout = two_fields_two_chats
                break;
            default:
                props.history.replace('/')
        }
        return (
            <div className={classes.Double}>
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

export default connect(mapStateToProps)(Double);