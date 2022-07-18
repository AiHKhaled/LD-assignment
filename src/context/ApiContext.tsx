import React, { ReducerWithoutAction, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { NewsContextType } from "../Types/NewsContextType";

const ApiContext = React.createContext<NewsContextType | undefined>(undefined);
ApiContext.displayName = "ApiContext";

const ApiContextProvider = ({ children }: any) => {
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

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};

export { useApiContext, ApiContextProvider };
