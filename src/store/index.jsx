import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import cart from './cart';
import categories from './categories';
import products from './products';
import readAll from '../components/middleware/getProducts';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(readAll('products'));
store.dispatch(readAll('categories'));


export default store;