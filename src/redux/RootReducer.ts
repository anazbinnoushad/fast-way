import CartReducer from "./reducers/CartReducer";
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    Cart: CartReducer(),
})

export default RootReducer