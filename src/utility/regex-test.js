const ytRegEx = /(?:.+?)?(?:\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/|watch\%3Fv\%3D)([a-zA-Z0-9_-]{11})+/
const twitchRegEx = /^(?:https?:\/\/)?(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/

export const isLinkValid = (link) => ytRegEx.test(link) || twitchRegEx.test(link)
export const getServiceType = (link) => {
    if (ytRegEx.test(link)) {
        return "youtube"
    } else if (twitchRegEx.test(link)) {
        return "twitch"
    }
    else {
        return null
    }
}
export const getSource = (link) => {
    if (ytRegEx.test(link)) {
        const match = ytRegEx.exec(link)
        return match[1]
    } else if (twitchRegEx.test(link)) {
        const match = twitchRegEx.exec(link)
        return match[1]
    }
    else {
        return null
    }
}