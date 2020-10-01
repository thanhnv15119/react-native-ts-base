import { createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { useRootReducer } from './reducers';
import { useRootSaga } from './sagas';

export const useStoreModule = (): Store => {
  const rootReducer = useRootReducer()
  const sagaMiddleware = createSagaMiddleware()
  const store: Store = createStore(rootReducer)
  sagaMiddleware.run(useRootSaga().useInit)
  return store
};