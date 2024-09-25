const initialState = {
    item: []
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "AddUser":
            return {
                ...state,
                item: [...state.item, action.payload],
            };
        default: return state;
    }
}