import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Quiz from "../pages/Quiz/Quiz";
import Result from "../pages/Result/Result";
import routes from "../routes/routes.json";

const PageRoutes = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center">
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.QUIZ} element={<Quiz />} />
          <Route path={routes.RESULT} element={<Result />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </Container>
  )
}

export default PageRoutes;