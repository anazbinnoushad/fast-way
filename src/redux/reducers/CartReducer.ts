import Actions from "../ActionTypes"

const initialState: any = []

export default function CartReducer() {
    return (state = initialState, action: any) => {
        switch (action.type) {
            case Actions.ADD_TO_CART:
                return [...state, action.payload]
            default:
                return state
        }
    }
}