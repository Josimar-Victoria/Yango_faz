export const initialState = {
    isopen: false,
    user: null,
    darkMode: false,
}

export const actionsTypes = {
    TOGGLE_MENU: ' TOGGLE_MENU',
    SET_USER: 'SET_USER',
    SET_DARKMODE: 'SET_DARKMODE',
}



//excucha si en algun punto se a inyectado Datos

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionsTypes.TOGGLE_MENU:
            return{
                ...state,
                isopen: action.isopen,
            }
            case actionsTypes.SET_USER:
                return {
                    ...state,
                    user: action.user,
                }
                case actionsTypes.SET_DARKMODE:
                    return {
                        ...state,
                        darkMode: action.darkMode,
                    }
            default: return state
    }
}

export default reducer;