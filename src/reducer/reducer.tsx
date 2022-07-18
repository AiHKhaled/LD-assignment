type ApiContextType = {
  loading?: boolean;
  error?: string;
  data?: NewsItemType[] | null;
  dispatch?: Dispatch<ReducerActionType>;
};

type ReducerActionType = {
  type?: string;
  payload?: NewsItemType[] | null;
};

import React, { Dispatch, useReducer } from "react";
import { NewsItemType } from "../common/NewsItem";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

export const ApiContext = React.createContext({});
ApiContext.displayName = "ApiContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
        data: [],
      };
    default:
      return state;
  }
};

const ApiContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
