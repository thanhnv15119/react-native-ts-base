import { all } from 'redux-saga/effects'

export const useRootSaga = () => {
  function* useInit() {
    yield all([
      
    ])
  }
  return { useInit }
};