import React from 'react';
import classes from '../global/Box.module.scss'
import layouts from '../global/Layouts.module.scss'

const ThumbStream = (props) => {
    return (
        <div className={classes.ThumbBox} style={props.style}>
            S
        </div>
    );
}
const ThumbChat = (props) => {
    return (
        <div className={classes.ThumbBox} style={props.style}>
            C
        </div>
    );
}


export const two_fields = (click) => (
    <div className={layouts.TwoFields} onClick={() => click("two_fields")}>
        <ThumbStream />
        <ThumbStream />
    </div>
)
export const two_fields_one_chat = (click) => (
    <div className={layouts.TwoFieldsOneChat} onClick={() => click("two_fields_one_chat")}>
        <ThumbStream style={{ "grid-area": "streamA" }} />
        <ThumbChat style={{ "grid-area": "chat" }} />
        <ThumbStream style={{ "grid-area": "streamB" }} />
    </div>
)
export const two_fields_two_chats = (click) => (
    <div className={layouts.TwoFieldsTwoChat} onClick={() => click("two_fields_two_chats")}>
        <ThumbStream />
        <ThumbChat />
        <ThumbStream />
        <ThumbChat />
    </div>
)

export const three_fields = (click) => (
    <div className={layouts.ThreeFiels} onClick={() => click("three_fields")}>
        <ThumbStream style={{ "grid-area": "streamA" }} />
        <ThumbStream style={{ "grid-area": "streamB" }} />
        <ThumbStream style={{ "grid-area": "streamC" }} />
    </div>
)
export const three_fields_one_chat = (click) => (
    <div className={layouts.ThreeFielsOneChat} onClick={() => click("three_fields_one_chat")}>
        <ThumbStream style={{ "grid-area": "streamA" }} />
        <ThumbStream style={{ "grid-area": "streamB" }} />
        <ThumbStream style={{ "grid-area": "streamC" }} />
        <ThumbChat style={{ "grid-area": "chat" }} />
    </div>
)

export const four_fields = (click) => (
    <div className={layouts.FourFiels} onClick={() => click("four_fields")}>
        <ThumbStream id={1} type={"twitch"} src="notrealmurder" />
        <ThumbStream id={2} type={"twitch"} src="notrealmurder" />
        <ThumbStream id={3} type={"twitch"} src="notrealmurder" />
        <ThumbStream id={3} type={"twitch"} src="notrealmurder" />
    </div>
)
export const four_fields_one_chat = (click) => (
    <div className={layouts.FourFielsOneChat} onClick={() => click("four_fields_one_chat")}>
        <ThumbStream style={{ "grid-area": "streamA" }} />
        <ThumbStream style={{ "grid-area": "streamB" }} />
        <ThumbStream style={{ "grid-area": "streamC" }} />
        <ThumbStream style={{ "grid-area": "streamD" }} />
        <ThumbChat style={{ "grid-area": "chat" }} />
    </div>
)

