import React from "react";
import styled from "@emotion/styled";
import { dayOfWeekAsString, selectIcon } from "../utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  height: 254px;
  margin: 0px;
  text-align: center;
  border-top: 5px solid white;
  border-right: 5px solid white;
  &:last-child {
    border-right: 0px;
  }
  h2 {
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 26px;
    margin-top: 30px;
  }
  .weather-temp {
    font-family: "Barlow", sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: #333339;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  margin: 25px 0px 20px 0px;
  .weather-icon {
    height: 64px;
    color: #cdf0f0;
    path {
      stroke: #2e4369;
      stroke-width: 20px;
    }
  }
`;

const FourDayForecast = ({ fourDayForecast }) => {
  return (
    <div style={{ display: "flex" }}>
      {fourDayForecast.length > 0 &&
        fourDayForecast.map((day) => {
          const date = new Date(day.dt * 1000);
          const dayOfForcast = date.getDay();
          return (
            <Container key={day.dt}>
              <h2>{dayOfWeekAsString(dayOfForcast)}</h2>
              <IconWrapper>
                <FontAwesomeIcon
                  icon={selectIcon(day.weather[0].main)}
                  className='weather-icon'
                />
              </IconWrapper>
              <p className='weather-temp'>{Math.floor(day.temp.day)}&deg;</p>
            </Container>
          );
        })}
    </div>
  );
};

export default FourDayForecast;
