import React from "react";
import styled from "@emotion/styled";
import { selectIcon } from "../utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  text-align: center;
  padding: 34px;
  .weather-main {
    display: flex;
    justify-content: center;
    margin: 34px 0px;
  }
  h2,
  .weather-condition {
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 300;
    margin: 0;
  }

  .weather-temp {
    font-family: "Barlow", sans-serif;
    font-size: 100px;
    font-weight: 600;
    color: #333339;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  .weather-icon {
    height: 160px;
    color: #cdf0f0;
    path {
      stroke: #2e4369;
      stroke-width: 17px;
    }
  }
`;

const Today = ({ todayForecast }) => {
  return (
    <>
      {todayForecast.length === 1 && (
        <Container>
          <h2>Today</h2>
          <div className='weather-main'>
            <IconWrapper>
              <FontAwesomeIcon
                icon={selectIcon(todayForecast[0].weather[0].main)}
                className='weather-icon'
              />
            </IconWrapper>
            <div>
              <p className='weather-temp'>
                {Math.floor(todayForecast[0].temp.day)}&deg;
              </p>
              <p className='weather-condition'>
                {todayForecast[0].weather[0].main}
              </p>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Today;
