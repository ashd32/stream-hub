import { getSource } from '../utility/regex-test'

const initialState = {
    sources: null,
    layout: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESET_STORE":
            return {
                sources: null,
                layout: null
            }
        case "RESET_LAYOUT":
            return {
                ...state,
                layout: null
            }
        case "SET_SOURCES":
            const sources = action.sources.map(source => {
                return {
                    src: getSource(source.value),
                    service: source.service,
                }
            })
            return {
                ...state,
                sources
            }
        case "SET_LAYOUT":
            return {
                ...state,
                layout: action.layout
            }
        default:
            return state;
    }
}

export default reducer