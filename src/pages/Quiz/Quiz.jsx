import { Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_API_KEY } from "../../constants/endpoint";
import useAxios from "../../hooks/useAxios";
import { changeScore } from "../../reducers/quizslice";
import "../Quiz/Quiz.css";
import routes from "../../routes/routes.json"

const Quiz = () => {

  const { name,
    question_category,
    score } = useSelector((state) => state.quiz)

  //console.log(name, question_category, question_difficulty, score)

  const apiUrl = `questions?apiKey=${USER_API_KEY}&category=${question_category}&difficulty=easy&limit=20`

  const { loading, response } = useAxios({ url: apiUrl })
  
  const [queIndex, setQueIndex] = useState(0)
  const [options, setOptions] = useState([])
  const [correct, setCorrect] = useState("")
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (!name) {
      navigate(routes.ERROR)
    }
  }, [])

  useEffect(() => {
    if (response) {
      const question = response[queIndex];
      // console.log(question)
      const answerOpt = question.answers;
      setOptions(answerOpt);
    }
  }, [response, queIndex])

  //console.log(options);

  const checkAnsHandler = (val) => {
    setSelected(true);
    //console.log("clicked", val)
    let obj = response[queIndex].correct_answers;
    let keys = Object.keys(obj);
    let filtered = keys.filter((key) => obj[key] === 'true');

    //console.log(filtered)
    if (filtered.includes(val)) {
      dispatch(changeScore(score + 1))
      // console.log("right")
      if (filtered[0] === "answer_a_correct") {
        setCorrect("Correct")
      } else if (filtered[0] === "answer_b_correct") {
        setCorrect("Correct")
      } else if (filtered[0] === "answer_c_correct") {
        setCorrect("Correct")
      } else {
        setCorrect("Correct")
      }
    } else {
      setCorrect("Wrong")
    }
  }

  const nextHandler = () => {
    // console.log("clicked")
    if (queIndex + 1 >= response.length) {
      navigate(routes.RESULT);
    } else {
      setTimeout(() => {
        setQueIndex(queIndex + 1);
        setCorrect("")
        setSelected(false);
      }, 100)
    }
  };


  return (
    <Box mt={5}>
      {loading && (<Box>
        <CircularProgress />
      </Box>)}
      {!loading && (<Box>
        <Typography mb={5} className="name" variant="h4">Welcome {name}</Typography>
        {/* <marquee direction="right" >Best of Luck</marquee> */}
        <Typography className="que" variant="h4">Question {queIndex + 1}</Typography>
        <Typography color="#f1f1f1" fontSize={22} mt={3}>{response[queIndex].question}</Typography>
        {options.answer_a && (<Box mt={3}>
          <Button disabled={selected} className="opt" onClick={() => checkAnsHandler("answer_a_correct")} variant="contained">A: {options.answer_a}</Button>
        </Box>)}
        {options.answer_b && (<Box mt={3}>
          <Button disabled={selected} className="opt" onClick={() => checkAnsHandler("answer_b_correct")} variant="contained">B: {options.answer_b}</Button>
        </Box>)}
        {options.answer_c && (<Box mt={3}>
          <Button disabled={selected} className="opt" onClick={() => checkAnsHandler("answer_c_correct")} variant="contained">C: {options.answer_c}</Button>
        </Box>)}
        {options.answer_d && (<Box mt={3}>
          <Button disabled={selected} className="opt" onClick={() => checkAnsHandler("answer_d_correct")} variant="contained">D: {options.answer_d}</Button>
        </Box>)}
        {correct && (<Typography className={correct} fontSize={24} fontWeight={900}>{correct}</Typography>)}
        <Box mt={5}>
          <Button onClick={nextHandler} color="secondary" variant="contained">{queIndex >= response.length - 1 ? "Submit" : "Next Question"}</Button>
        </Box>
        <Box color="#f1f1f1" fontWeight="bold" fontSize={25} mt={5}>Score: {score}/{response.length}</Box>
      </Box>)}
    </Box>
  )
}

export default Quiz;