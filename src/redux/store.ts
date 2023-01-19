import { createStore } from "redux"
import RootReducer from "./RootReducer"

const store: any = () => {
    return createStore(RootReducer)
}

export default store