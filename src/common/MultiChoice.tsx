import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type MultiChoiceType = {
  title?: string;
  data: string[];
};

export const MultiChoice: React.FC<MultiChoiceType> = ({
  data,
  title,
}: MultiChoiceType) => {
  const [value, setValue] = React.useState(data[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 210 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        >
          {data.map((item, i) => (
            <MenuItem value={item} key={`multiChoice${i}`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
