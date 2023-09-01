import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/TextInput/TextInput";
import categories from "../../constants/categories";
import routes from "../../routes/routes.json";
import "../HomePage/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(routes.QUIZ)
  }


  return (
    <Box mt={10}>
      <Typography className="heading" variant="h2" >Quiz App</Typography>
      <form className="form" onSubmit={submitHandler}>
        <TextInput />
        <SelectInput className="input" label="Topic" options={categories} />
        <Box mt={3} width="50%" mr="auto" ml="auto">
          <Button className="btn"  variant="contained" type="submit" fullWidth >Start Quiz</Button>
        </Box>
      </form>
    </Box>
  )
}

export default HomePage;