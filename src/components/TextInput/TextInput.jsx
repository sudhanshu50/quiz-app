import { FormControl, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../reducers/quizslice";
import "../TextInput/TextInput.css";

const TextInput = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setName(e.target.value)
    dispatch(changeName(e.target.value))
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField className="input"
          onChange={changeHandler}
          variant="outlined"
          type="text"
          label="Name"
          value={name}
          size="small"
          required
        />
      </FormControl>
    </Box>
  )
}

export default TextInput;