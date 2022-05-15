export const loginReducer = (state = false,action) => {
    switch (action.type) {
        case "LOGIN":
            return true
            break;
        case "LOGOUT":
            return false
            break;
    
        default:
            return state;
            break;
    }
}