import MediaCard from "./ParentCard";
import news from "../images/News.svg";
import { CustomLink } from "../common/CustomLink";
import External from "../images/External.svg";
import { Stack } from "@mui/material";
import { NewsItems } from "../News/NewsItems";

export const News = () => {
  return (
    <>
      <MediaCard
        title="Latest News"
        Icon={() => <img src={news} />}
        topLink={
          <Stack display="flex" flexDirection="row" gap={1}>
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
