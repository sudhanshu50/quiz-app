import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCateg } from "../../reducers/quizslice";
import "../SelectInput/SelectInput.css";

const SelectInput = ({ label, options }) => {

  const [value, setValue] = useState("")

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue(e.target.value)
    if (label === "Topic") {
      dispatch(changeCateg(e.target.value))
    }
  }

  // console.log(label);
  // console.log(value);

  return (
    <Box mt={3} width="100%" textAlign="center">
      <FormControl size="small" fullWidth >
        <InputLabel>{label}</InputLabel>
        <Select required className="input" value={value} label={label} onChange={changeHandler}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInput;