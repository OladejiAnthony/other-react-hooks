//Your State Update logic is in a separate file now.


export const initialState = {
    count: 0
}

export const countReducer = (state, action) => {
    if(action.type === "SUBTRACT") {
        console.log(action.payload);
        return {
            count: state.count - 1
        }
    }
    if(action.type === "RESET") {
        console.log(action.payload);
        return {
            count: 0
        }
    }
    if(action.type === "ADD") {
        console.log(action.payload);
        return {
            count: state.count + 1
        }
    }
    return state;
}

