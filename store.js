import {createStore} from 'redux';
import { persistReducer } from 'redux-persist'
import rootReducers from './app/screens/settingScreen/redux/reducers/rootReducer';

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['newsReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer)
export default store