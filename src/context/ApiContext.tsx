import React, { ReducerWithoutAction, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { NewsContextType } from "../Types/NewsContextType";

const ApiContext = React.createContext<NewsContextType>(initialState);
ApiContext.displayName = "ApiContext";

export const useApiContext = () => {
  const context = useContext(ApiContext);
  return context;
};
export const ApiContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    reducer as ReducerWithoutAction<any>,
    initialState
  );

  const value = {
    state,
    dispatch,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
