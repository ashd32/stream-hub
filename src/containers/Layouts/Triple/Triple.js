import React from 'react';
import Chat from '../../../components/ChatBox/ChatBox'
import Stream from '../../../components/StreamBox/StreamBox'
import classes from './Triple.module.scss';
import { connect } from 'react-redux'

const Triple = (props) => {
    if (!props.sources && !props.layout) {
        props.history.replace('/')
        return null
    } else {
        const three_fields = (
            <div className={classes.ThreeFiels}>
                <Stream id={1} type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "streamA" }} />
                <Stream id={2} type={props.sources[1].service} src={props.sources[1].src} style={{ "grid-area": "streamB" }} />
                <Stream id={3} type={props.sources[2].service} src={props.sources[2].src} style={{ "grid-area": "streamC" }} />
            </div>
        )
        const three_fields_one_chat = (
            <div className={classes.ThreeFielsOneChat}>
                <Stream id={1} type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "streamA" }} />
                <Stream id={2} type={props.sources[1].service} src={props.sources[1].src} style={{ "grid-area": "streamB" }} />
                <Stream id={3} type={props.sources[2].service} src={props.sources[2].src} style={{ "grid-area": "streamC" }} />
                <Chat id={2} type={props.sources[0].service} src={props.sources[0].src} style={{ "grid-area": "chat" }} />
            </div>
        )
        let layout = null
        switch (props.layout) {
            case "three_fields":
                layout = three_fields
                break;
            case "three_fields_one_chat":
                layout = three_fields_one_chat
                break;
            default:
                props.history.replace('/')
        }
        return (
            <div className={classes.Triple}>
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

export default connect(mapStateToProps)(Triple);