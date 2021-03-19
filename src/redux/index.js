import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import dataReducer from './dataReducer'

const initialState = {
  dataState: {
    dataLoading: false,
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  dataState: dataReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, initialState,  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
let persistor = persistStore(store)

export default { store, persistor }