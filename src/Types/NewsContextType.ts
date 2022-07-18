import { Dispatch } from "react";
import { NewsItemType } from "../News/NewsItem";
import { ReducerActionType } from "../reducer/reducer";

export type news = {
  loading?: boolean;
  error?: string;
  data?: NewsItemType[] | null;
};

export type NewsContextType = {
  state: news;

  dispatch: Dispatch<ReducerActionType>;
};
