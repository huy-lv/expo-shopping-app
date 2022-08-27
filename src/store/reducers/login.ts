import { Reducer, ReducerState } from "react";
import { createAction, handleActions } from "redux-actions";

enum ThemeActionType {
  SET_LOGIN = "SET_LOGIN",
}

interface ThemeAction {
  type: ThemeActionType;
  payload: any;
}

export interface LoginReducerState {
  isLoggedIn: boolean;
  accessToken: string;
  profile: any;
}

type LoginReducerType = Reducer<LoginReducerState, ThemeAction>;

const initState: ReducerState<LoginReducerType> = {
  isLoggedIn: false,
  accessToken: "",
  profile: null,
};

const loginReducer: LoginReducerType = handleActions(
  {
    SET_LOGIN: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },
  },
  initState
);

export const setLoginAction = createAction("SET_LOGIN");

export default loginReducer;
