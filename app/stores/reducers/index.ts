import { CombinedState, combineReducers, Reducer } from "redux";
import { RootState } from "../states";

export const useRootReducer = (): Reducer<CombinedState<RootState>> => (combineReducers<RootState>({

}))