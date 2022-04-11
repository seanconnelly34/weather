import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useFetchWeather from "../hooks/useFetchWeather";
import TodayForecast from "./TodayForecast";
import FourDayForecast from "./FourDayForecast";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSlash } from "@fortawesome/free-solid-svg-icons";

const ForecastWrapper = styled.div`
  min-height: 600px;
  text-align: center;
  .loading {
    height: 60px;
    opacity: 0.3;
    margin-top: 200px;
  }
`;
const Forecast = ({ city }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { loading, todayForecast, fourDayForecast, error } =
    useFetchWeather(city);

  useEffect(() => {
    if (error) {
      setOpenSnackbar(true);
    }
  }, [error]);

  const handleCloseError = () => {
    setOpenSnackbar(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  return (
    <ForecastWrapper>
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity='error'
            sx={{ width: "100%" }}
          >
            Error fetching weather data, try again
          </Alert>
        </Snackbar>
      )}
      {error && <FontAwesomeIcon icon={faSlash} className='loading' />}
      {loading && <FontAwesomeIcon icon={faSpinner} className='loading' />}
      <TodayForecast todayForecast={todayForecast} />
      <FourDayForecast fourDayForecast={fourDayForecast} />
    </ForecastWrapper>
  );
};

export default Forecast;
