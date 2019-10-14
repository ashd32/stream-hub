import React from 'react';
import { connect } from 'react-redux'
import classes from './ChooseLayout.module.scss'
import {
    two_fields,
    two_fields_one_chat,
    two_fields_two_chats,
    three_fields,
    three_fields_one_chat,
    four_fields,
    four_fields_one_chat
} from '../../utility/layouts-thumbnails'
import Fade from 'react-reveal/Fade';



const ChooseLayout = (props) => {
    props.onResetLayout()

    const handleChooseLayout = (layout) => {
        props.onSetLayout(layout)
        switch (props.sources.length) {
            case 2:
                props.history.push('/double')
                break;
            case 3:
                props.history.push('/triple')
                break;
            case 4:
                props.history.push('/quad')
                break;
            default:
                props.history.replace('/')
                break;
        }
    }

    if (!props.sources) {
        props.history.replace('/')
        return null
    }
    else {
        let layouts = []
        switch (props.sources.length) {
            case 2:
                layouts = [two_fields(handleChooseLayout), two_fields_one_chat(handleChooseLayout), two_fields_two_chats(handleChooseLayout)]
                break;
            case 3:
                layouts = [three_fields(handleChooseLayout), three_fields_one_chat(handleChooseLayout)]
                break;
            case 4:
                layouts = [four_fields(handleChooseLayout), four_fields_one_chat(handleChooseLayout)]
                break;
            default:
                layouts = []
                props.history.replace('/')
                break
        }

        const thumbnails = layouts.map(lay => (
            <div className={classes.MiniLayouts}>{lay}</div>
        ))

        return (
            <Fade>
                <div className={classes.ChooseLayout}>
                    {thumbnails}
                </div>
            </Fade>
        );
    }
}



const mapStateToProps = state => {
    return {
        sources: state.sources
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetLayout: (layout) => dispatch({ type: "SET_LAYOUT", layout }),
        onResetLayout: () => dispatch({ type: "RESET_LAYOUT" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLayout);