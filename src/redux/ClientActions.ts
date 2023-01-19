import Actions from "./ActionTypes"

export const AddtoCart = (payload: any) => {
    return {
        type: Actions.ADD_TO_CART,
        payload
    }
}