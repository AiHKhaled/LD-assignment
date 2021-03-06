import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Badge, Chip, styled } from "@mui/material";
import { DrawerItem } from "../Types/IconsType";
import { useDrawerContext } from "../context";
import { Link } from "react-router-dom";

const DrawerMenu: React.FC<DrawerItem> = ({
  title,
  Icon,
  subnav,
  badgeContent,
  hasBadge,
  route,
}: DrawerItem) => {
  const { isOpened } = useDrawerContext();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
  });

  const StyledButton = styled(ListItemButton)({
    "&:hover": { background: "#26284687" },
  });

  const style = {
    container: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
    },
    list: {
      display: isOpened ? "flex" : "none",
      flexDirection: "column",
      fontSize: "14px",
    },
    link: {
      textDecoration: "none",
    },
  };

  const DrawerButton = () => {
    return (
      <StyledButton onClick={handleClick}>
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
      </StyledButton>
    );
  };

  return (
    <>
      <List
        dense={true}
        style={style.container}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {subnav ? (
          <DrawerButton />
        ) : (
          <StyledLink to={`${route}`}>
            <DrawerButton />
          </StyledLink>
        )}
        {subnav && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List sx={style.list} component="div" disablePadding>
              {subnav?.map(({ title, route }, i) => {
                return (
                  <StyledLink to={`${route}`}>
                    <StyledButton
                      dense={true}
                      sx={{
                        marginLeft: "40px",
                      }}
                      key={`subItemMenu${i}`}
                    >
                      <ListItemText primary={title} />
                    </StyledButton>
                  </StyledLink>
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
