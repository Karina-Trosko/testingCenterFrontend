import { createStore } from 'redux';
import { mainReducer } from './reducers/mainReducer';
export let store = createStore(mainReducer);
store.subscribe(() => console.log(store.getState()))