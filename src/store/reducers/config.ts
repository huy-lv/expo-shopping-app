import { ApplicationConfig, defaultConfig } from "../../config/DefaultConfig";
import { Reducer, ReducerState } from "react";
import { createAction, handleActions } from "redux-actions";

enum ThemeActionType {
  SET_THEME = "SET_THEME",
  SET_LANGUAGE = "SET_LANGUAGE",
}

interface ThemeAction {
  type: ThemeActionType;
  payload: any;
}

type ConfigReducerType = Reducer<ApplicationConfig, ThemeAction>;

const initState: ReducerState<ConfigReducerType> = defaultConfig;

const configReducer: ConfigReducerType = handleActions(
  {
    SET_THEME: (state, action) => {
      return {
        ...state,
        constants: {
          ...state.constants,
          selectedTheme: action.payload,
        },
      };
    },
    SET_LANGUAGE: (state, action) => {
      return {
        ...state,
        constants: {
          ...state.constants,
          selectedLanguage: action.payload,
        },
      };
    },
    SET_LOGIN: (state, action) => {
      return {
        ...state,
        constants: {
          ...state.constants,
          loggedIn: action.payload,
        },
      };
    },
  },
  initState
);

export const setThemeAction = createAction("SET_THEME");
export const setLanguageAction = createAction("SET_LANGUAGE");

export default configReducer;
