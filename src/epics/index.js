import 'rxjs';
// import {switchMap} from 'rxjs/operators';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {getCart} from '../reducers';
import {api} from '../services';
import * as actions from '../actions';

const searchProducts = (action$) => {
  return action$
    .ofType(actions.GET_ALL_PRODUCTS).switchMap(q => {
      // console.log(api.getProducts())
      return api.getProducts().map(actions.receiveProducts)
    });
};

const checkout = (action$,store) => {
  return action$
    .ofType(actions.CHECKOUT_REQUEST).switchMap(q => {
      const cart = getCart(store.getState());
      return api.buyProducts(cart)
        .map(cart => actions.checkoutSuccess(cart))
        .catch(error => Observable.of(actions.checkoutFailure(error)))
    });
};



export const rootEpic = combineEpics(
  searchProducts,
  checkout
);