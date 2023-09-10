import { GetProductsReducer } from "./GetProductsReducer";
import {combineReducers} from 'redux'

const rootreducers =combineReducers({
    GetProductsdata:GetProductsReducer
})

export default rootreducers;