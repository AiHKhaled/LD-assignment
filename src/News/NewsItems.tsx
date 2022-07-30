import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { NewsItem } from "./NewsItem";
import { useApiContext } from "../context/ApiContext";
import { Skeleton, Stack } from "@mui/material";

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

  const box = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    gap: 2,
    padding: "10px",
  };

  const skeleton = {
    width: 120,
    height: "auto",
  };
  const secondSkeleton = {
    width: 370,
    height: "auto",
  };
  const secondStack = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <>
      {loading && (
        <>
          <Stack>
            <Skeleton sx={skeleton} variant="rectangular" />
            <Stack sx={secondStack}>
              <Skeleton variant="text" />
              <Skeleton variant="rectangular" sx={secondSkeleton} />
            </Stack>
          </Stack>
        </>
      )}
      {error}
      <Box sx={box}>
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
