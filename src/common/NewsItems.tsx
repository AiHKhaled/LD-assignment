import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import axios from "axios";
import { ApiContext } from "../reducer/reducer";
import { NewsItem } from "./NewsItem";

const URL = "https://fakerapi.it/api/v1/books?_quantity=8";

export const NewsItems = () => {
  const apiContext = useContext(ApiContext);
  const { state, dispatch } = apiContext;
  const { loading, error, data } = state;

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, [dispatch]);

  return (
    <>
      {loading && "Loading"}
      {error}
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2} pt="10px">
        {data &&
          data.map((d, i) => {
            const { title, author, image, publisher } = d;
            return (
              <NewsItem
                key={`${i}newsitem`}
                title={title}
                author={author}
                image={image}
                publisher={publisher}
              />
            );
          })}
      </Box>
    </>
  );
};
