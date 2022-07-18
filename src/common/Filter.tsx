import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const handleClick = (
  event: React.MouseEvent<HTMLElement>,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchorEl(event.currentTarget);
};
const handleSelect = (
  option: string,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
) => {
  setSelectedOption(option);
  setAnchorEl(null);
};
const handleClose = (
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchorEl(null);
};

const filter_menu = ["This Month", "This Week", "This Day"];

export const FilterMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState(filter_menu[0]);
  const open = Boolean(anchorEl);

  const style = {
    button: {
      textTransform: "none",
      color: "#666666",
      fontSize: "14px",
      fontWeight: 400,
    },
    expansion: { marginLeft: "0.5rem", color: "#666666" },
  };

  return (
    <div>
      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => handleClick(event, setAnchorEl)}
        sx={style.button}
      >
        {selectedOption}
        <ExpandMoreIcon style={style.expansion} />
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(setAnchorEl)}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {filter_menu.map((option) => (
          <MenuItem
            key={option}
            selected={option === selectedOption}
            onClick={() => handleSelect(option, setAnchorEl, setSelectedOption)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
