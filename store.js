import {createStore} from 'redux';
import rootReducers from './app/screens/settingScreen/redux/reducers/rootReducer';

const store = createStore(rootReducers);

export default store;
