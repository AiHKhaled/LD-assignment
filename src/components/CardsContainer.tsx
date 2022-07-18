// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Visitors from "../cards/Visitors";

// export default function BasicGrid() {
//   return (
//     <Grid
//       sx={{
//         margin: "auto",
//         marginTop: "-50px",

//         flexGrow: 1,
//         p: " 0 40px",
//       }}
//       container
//       xs={12}
//     >
//       <Grid
//         display="flex"
//         alignContent={"flex-start"}
//         marginRight="20px"
//         lg={8}
//         xs={12}
//         container
//         spacing={2}
//       >
//         <Grid item md={8} xs={12}>
//           <Visitors />
//         </Grid>
//         <Grid item md={6} xs={12}>
//           <Visitors />
//         </Grid>
//         <Grid item md={6} xs={12}>
//           <Visitors />
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         lg={4}
//         xs={12}
//         spacing={2}
//         display="flex"
//         alignContent="flex-start"
//       ></Grid>
//     </Grid>
//   );
// }
// //

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
      p: "0 20px",
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
      <Grid lg={8} container spacing={2} style={style.gridleft}>
        {leftCards.map((Card, i) => {
          return (
            <Grid key={`leftCard${i}`} item xs={12} md={i === 4 ? 12 : 6}>
              <Card />
            </Grid>
          );
        })}
      </Grid>
      <Grid container lg={4} xs={12} spacing={2} style={style.gridright}>
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
