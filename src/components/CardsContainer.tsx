import * as React from "react";

import Grid from "@mui/material/Grid";
import Visitors from "../cards/Visitors";
import { Orders } from "../cards/Orders";
import { Configure } from "../cards/Configure";
import { Trust } from "../cards/Trust";
import { CustomerSupport } from "../cards/CustomerSupport";
import { InviteFriends } from "../cards/InviteFriends";
import { SellProducts } from "../cards/SellProducts";
import { Extensions } from "../cards/Extensions";
import { News } from "../cards/LatestNews";

export default function CardsContainer() {
  const leftCards = [Visitors, Orders, SellProducts, Extensions, News];
  const rightCards = [Configure, Trust, InviteFriends, CustomerSupport];

  const style = {
    grid: {
      flexGrow: 1,
      px: " 40px",
      marginTop: "-50px",
    },
    gridleft: {
      display: "flex",
      alignContent: "flex-start",
      marginRight: "20px",
    },
    gridright: {
      display: "flex",
      alignContent: "flex-start",
    },
  };

  return (
    <Grid container sx={style.grid}>
      <Grid container lg={8} spacing={3} style={style.gridleft}>
        {leftCards.map((Card, i) => {
          return (
            <Grid key={`leftCard${i}`} item xs={12} md={i === 4 ? 12 : 6}>
              <Card />
            </Grid>
          );
        })}
      </Grid>
      <Grid container lg={4} xs={12} spacing={3} style={style.gridright}>
        {rightCards.map((Card, i) => {
          return (
            <Grid key={i} item xs={12}>
              <Card />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
