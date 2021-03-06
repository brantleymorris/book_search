import React, { useContext, useReducer, createContext } from "react";

const StateContext = createContext();
const {Provider} = StateContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return{
                ...state,
                posts: action.post.items,
                loading: false
            };
        // add more cases as necesary
    default:
        return state;
    }
};

// need to tailor this to search and saved needs
// posts key value is added when the state is updated
const initialState = {
    saved: [],
    posts: [],
    result: {},
    loading: false
};

// sets up the state to be accessed by components later
const StateProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={[state, dispatch]} {...props} />;
};

// not sure what this is
const useStateContext = () => {
    return useContext(StateContext);
};

export { StateProvider, useStateContext };