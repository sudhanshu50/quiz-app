import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName, changeScore } from "../../reducers/quizslice";
import routes from "../../routes/routes.json";

const Result = () => {
  const { score, name } = useSelector((state) => state.quiz)

  useEffect(() => {
    if (!name) {
      navigate(routes.ERROR)
    }
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(changeName(""))
    dispatch(changeScore(0))
    navigate(routes.HOME)
  }

  return (
    <Box mt={10}>
      <Typography fontFamily="cursive" color="#37ded8" variant="h2" >Result</Typography>
      <Box mt={11}>
        <Typography color="#f1f1f1" mb={8} variant="h3" fontFamily="Roboto">User : {name} </Typography>
        <Typography color="#f1f1f1" mb={8} variant="h3" fontFamily="Roboto">You scored : {score} </Typography>
        <Button variant="contained" color="secondary" onClick={clickHandler}>Home</Button>
      </Box>
    </Box>
  )
}

export default Result;