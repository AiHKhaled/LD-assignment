import MediaCard from "./ParentCard";
import news from "../images/news.svg";
import { CustomLink } from "../common/CustomLink";
import External from "../images/External.svg";
import { Stack } from "@mui/material";
import { NewsItems } from "../News/NewsItems";

export const News = () => {
  const stack = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    height: "40px",
  };
  const link = {
    margin: "20px",
  };
  return (
    <>
      <MediaCard
        title="Latest News"
        Icon={() => <img src={news} />}
        topLink={
          <Stack sx={stack}>
            <CustomLink content="Visit our blog" />

            <a href="#" style={link}>
              <img src={External} />
            </a>
          </Stack>
        }
        CardBody={<NewsItems />}
      />
    </>
  );
};
