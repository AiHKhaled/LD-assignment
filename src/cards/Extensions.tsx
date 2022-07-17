import MediaCard from "./ParentCard";
import Extension from "../images/extension.svg";
import { CustomLink } from "../common/CustomLink";
import { Responsive } from "../common/Slider";
export const Extensions = () => {
  return (
    <MediaCard
      title="Extensions Marketplace"
      Icon={() => <img src={Extension} />}
      CardBody={<Responsive />}
      CardFooter={<CustomLink content="Discover all extensions" hasIcon />}
    />
  );
};
