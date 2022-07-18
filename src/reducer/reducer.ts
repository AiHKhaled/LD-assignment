import { NewsItemType } from "../News/NewsItem";

export type ReducerActionType = {
  type?: string;
  payload?: NewsItemType[] | null;
};
export const initialState = {
  loading: true,
  error: "",
  data: null,

  dispatch: () => {},
};

export const reducer = (state = initialState, action: ReducerActionType) => {
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
