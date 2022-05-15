export const myCounter = (state = 0 ,action) =>{
    switch (action.type) {
        case "INCREMENT":
            return state +1
            break;

        case "DICREMENT":
            return state -1
            break;
    
        default:
            return state
            break;
    }
}