export const initialState = {
    isopen: false,
    user: null,
}

export const actionsTypes = {
    TOGGLE_MENU: ' TOGGLE_MENU',
    SET_USER: 'SET_USER',
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
            default: return state
    }
}

export default reducer;