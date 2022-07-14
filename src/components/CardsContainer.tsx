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

export default function BasicGrid() {
  return (
    <Grid container sx={{ flexGrow: 1, p: "0 20px", marginTop: "-50px" }}>
      <Grid
        lg={8}
        container
        spacing={2}
        style={{
          display: "flex",
          alignContent: "flex-start",
          marginRight: "20px",
        }}
      >
        <Grid item xs={12} md={6}>
          <Visitors />
        </Grid>
        <Grid item xs={12} md={6}>
          <Orders />
        </Grid>
        <Grid item xs={12} md={6}>
          <Visitors />
        </Grid>
      </Grid>
      <Grid
        container
        lg={4}
        xs={12}
        spacing={2}
        style={{
          display: "flex",
          alignContent: "flex-start",
        }}
      >
        <Grid item xs={12}>
          <Configure />
        </Grid>
      </Grid>
    </Grid>
  );
}
