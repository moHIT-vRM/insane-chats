import { combineReducers } from "redux";
import storage from "redux/persist/lib/storage";


const rootPersistConfig={
    key:'root',
    storage,
    keyPrefix:"redux-"
    // whiteList
    // blackList
}