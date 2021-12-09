
const initialState = {
    actualLevel: [],
}

export default function reducer(state = initialState, action) {
    console.log('!!!!!!!!! ACTION', action.payload)
    switch(action.type) {
        case "EASY": 
            return {
                ...state,
                actualLevel: action.payload
            }
        case "MEDIUM":
            return {
                ...state,
                actualLevel: action.payload
            }
        case "HARD":
            return {
                ...state,
                actualLevel: action.payload
            }
        default: 
            return state
        }
}