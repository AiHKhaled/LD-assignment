import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectStoreType = {
  title?: string;
  data: string[];
};

export const Store: React.FC<SelectStoreType> = ({ data }: SelectStoreType) => {
  const [value, setValue] = React.useState(data[0]);

  const handleChange = (
    event: SelectChangeEvent
    //setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Store</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {/* (event: SelectChangeEvent) => 
            (event, setValue) */}
          {data.map((item) => (
            <MenuItem value={item}>{item} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
