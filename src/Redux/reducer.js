const  initialState = "";

const reducer = (state =  initialState, action) => {
    if (action.type === "INPUT") {
        return action.payload;
    }
    else {
        return state;
    }


};

export default reducer;