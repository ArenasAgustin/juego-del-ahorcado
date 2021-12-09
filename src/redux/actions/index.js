import diccionario from '../../Diccinario/diccionario'


export function getEasyLevel() {
    return function(dispatch) {
        return (
            dispatch({
                type: "EASY",
                payload: diccionario.facil
            })
        )
    }
}

export function getMediumLevel() {
    return function(dispatch) {
        return (
            dispatch({
                type: "MEDIUM",
                payload: diccionario.medio
            })
        )
    }
}

export function getHardLevel() {
    return function(dispatch) {
        return (
            dispatch({
                type: "HARD",
                payload: diccionario.dificil
            })
        )
    }
}