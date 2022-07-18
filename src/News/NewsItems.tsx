import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { NewsItem } from "./NewsItem";
import { useApiContext } from "../context/ApiContext";

const URL = "https://fakerapi.it/api/v1/books?_quantity=8";

export const NewsItems = () => {
  const { state, dispatch } = useApiContext();
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
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2} p="10px">
        {data?.map((d, i) => {
          const { title, description, image, publisher } = d;
          return (
            <NewsItem
              key={`${i}newsitem`}
              title={title}
              description={description}
              image={image}
              publisher={publisher}
            />
          );
        })}
      </Box>
    </>
  );
};
