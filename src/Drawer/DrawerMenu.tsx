import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Badge, Chip } from "@mui/material";
import { DrawerItem } from "../Types/IconsType";
import { useDrawerContext } from "../context";
import { Store } from "./Store";

const DrawerMenu: React.FC<DrawerItem> = ({
  title,
  Icon,
  subnav,
  badgeContent,
  hasBadge,
}: DrawerItem) => {
  const { isOpened } = useDrawerContext();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        dense={true}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          sx={{
            " &:hover": { background: "#26284687" },
          }}
          onClick={handleClick}
        >
          {hasBadge ? (
            <Badge badgeContent={badgeContent} color="error" variant="dot">
              <Icon />
            </Badge>
          ) : (
            <Icon />
          )}
          {isOpened && <ListItemText sx={{ pl: "15px" }} primary={title} />}

          {(hasBadge && isOpened && (
            <Chip
              label={badgeContent}
              color={"secondary"}
              size="small"
              sx={{ height: "auto" }}
            />
          )) ||
            (subnav && isOpened ? open ? <ExpandLess /> : <ExpandMore /> : "")}
        </ListItemButton>
        {subnav && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              sx={{
                display: isOpened ? "flex" : "none",
                flexDirection: "column",
              }}
              component="div"
              disablePadding
            >
              {subnav?.map(({ title }) => {
                return (
                  <ListItemButton
                    dense={true}
                    sx={{
                      marginLeft: "40px",
                    }}
                  >
                    <ListItemText primary={title} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        )}
      </List>
    </>
  );
};

export default DrawerMenu;
