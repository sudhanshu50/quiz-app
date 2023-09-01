import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      navigate(routes.HOME);
    }
  }, [timer, navigate]);

  return (
    <Box mt={20}>
      <Typography color="red" variant="h3">Error: 404 Page not found</Typography>
      <Typography variant="h4" color="#f1f1f1">
        Please click the link <Link to={routes.HOME}>Home</Link> to redirect to
        home page
    </Typography>
      <Typography>You will be redirected to Homepage in {timer} seconds</Typography>
    </Box>
  );
};

export default ErrorPage;