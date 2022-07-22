import { styled, Typography } from "@mui/material";
import externalLink from "../images/externalLink.svg";

const Welcome = () => {
  const Styled = styled("div")`
    display: flex;
    align-items: flex-start;

    justify-content: space-between;
    height: 182px;
    width: "100%";
    padding: 40px 40px 80px 40px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      #21b8f9 0%,
      rgba(33, 184, 249, 0) 132.05%
    );

    color: white;
    font-size: 40px;
  `;

  const Styledlink = styled("div")`
    color: white;
    margin-left: 20px;
    padding-top: 18px;

    > a {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: white;
      letter-spacing: 0.75px;
      font-size: 17px;
      font-family: "Noto Sans HK", sans-serif;
      &:hover {
        color: #6cb4d3;
      }
    }
  `;
  return (
    <Styled>
      <Typography variant="h4">Welcome Mario!</Typography>

      <Styledlink>
        <a href="#">
          app.vetrinalive.it/fenoh-store
          <img src={externalLink} alt="" />
        </a>
      </Styledlink>
    </Styled>
  );
};

export default Welcome;
