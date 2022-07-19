import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useFetchWeather from "../hooks/useFetchWeather";
import TodayForecast from "./TodayForecast";
import FourDayForecast from "./FourDayForecast";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSlash } from "@fortawesome/free-solid-svg-icons";

type IForecastProps = {
  city: string;
};

const ForecastWrapper = styled.div`
  min-height: 600px;
  text-align: center;
  .loading {
    height: 60px;
    opacity: 0.3;
    margin-top: 200px;
  }
`;

const Alert = React.forwardRef(function Alert(
  props: AlertProps,
  ref: React.ForwardedRef<HTMLDivElement | null>
) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      severity='error'
      variant='filled'
      sx={{ width: "100%" }}
      {...props}
    />
  );
});

const Forecast = ({ city }: IForecastProps) => {
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

  return (
    <ForecastWrapper>
      <>
        {error && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseError}
          >
            <Alert onClose={handleCloseError}>
              Error fetching weather data, try again
            </Alert>
          </Snackbar>
        )}
        {error && <FontAwesomeIcon icon={faSlash} className='loading' />}
        {loading && <FontAwesomeIcon icon={faSpinner} className='loading' />}
        <TodayForecast todayForecast={todayForecast} />
        <FourDayForecast fourDayForecast={fourDayForecast} />
      </>
    </ForecastWrapper>
  );
};

export default Forecast;
