import MediaCard from "./ParentCard";
import news from "../images/News.svg";
import { CustomLink } from "../common/CustomLink";
import External from "../images/External.svg";
import { Stack } from "@mui/material";
import { NewsItems } from "../News/NewsItems";

export const News = () => {
  const stack = {
    display: "flex",
    flexDirection: "row",
    gap: "1",
  };

  return (
    <>
      <MediaCard
        title="Latest News"
        Icon={() => <img src={news} />}
        topLink={
          <Stack sx={stack}>
            <CustomLink content="Visit our blog" />
            <a href="#">
              <img src={External} />
            </a>
          </Stack>
        }
        CardBody={<NewsItems />}
      />
    </>
  );
};
