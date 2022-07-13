import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Badge, ListItemIcon } from "@mui/material";
import { DrawerItem } from "../Types/IconsType";
import { useDrawerContext } from "../context";

const DrawerMenu: React.FC<DrawerItem> = ({
  title,
  Icon,
  subnav,
  badgeContent,
  hasBadge,
  showSubnav,
  setShowSubnav,
  isSelected,
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
            <Badge badgeContent={badgeContent} color="success" variant="dot">
              <Icon />
            </Badge>
          ) : (
            <Icon />
          )}
          {isOpened && <ListItemText sx={{ pl: "20px" }} primary={title} />}

          {(hasBadge && isOpened && (
            <Badge
              badgeContent={badgeContent}
              color="success"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "12px",
                  height: "24px",
                  minWidth: "24px",
                  borderRadius: "50%",
                  padding: "5px",
                  transform: "translate( -1% , -50%)",
                },
              }}
            />
          )) ||
            (subnav && isOpened ? open ? <ExpandMore /> : <ExpandLess /> : "")}
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
