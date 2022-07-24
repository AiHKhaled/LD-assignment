import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { SliderItems } from "./SliderItems";
import Frame248 from "../images/Frame248.jpg";
import Frame238 from "../images/Frame238.jpg";

export const Responsive = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up(1973));

  const data = [
    {
      link: Frame248,
      firstpart: "Connect your own",
      secondpart: "domain ",
    },
    {
      link: Frame238,
      firstpart: "50 Additional",
      secondpart: " Products ",
    },
    {
      link: "https://picsum.photos/200/300",
      firstpart: "50 Additional",
      secondpart: " Products ",
    },
    {
      link: "https://picsum.photos/200/300",
      firstpart: "50 Additional",
      secondpart: " Products ",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.15,
    slidesToScroll: large ? 3 : 1,
    centerMode: true,
    centerPadding: large ? "5px" : "40px",
  };

  const container = {
    minWidth: "100%",
    width: 0,
  };

  return (
    <div style={container}>
      <Slider {...settings}>
        {data.map(({ link, firstpart, secondpart }, i) => {
          return (
            <SliderItems
              key={i}
              link={link}
              firstpart={firstpart}
              secondpart={secondpart}
            />
          );
        })}
      </Slider>
    </div>
  );
};
