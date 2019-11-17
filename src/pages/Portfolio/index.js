import React from "react";

import { Container, Card1, Card2, Card3 } from "./styles";

import website from "../../assets/website.png";
import aircnc from "../../assets/aircnc.png";
import gobarber from "../../assets/gobarber.png";

export default function Portfolio() {
  return (
    <Container>
      <Card1>
        <div>
          <img src={website} alt="Hotel Website" />
        </div>
        <h6>Hotel Website</h6>
        <p>This is an example of a project designed for use on a hotel page</p>
        <a
          href="https://github.com/eltonlazzarin/example-hotel-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>VIEW PROJECT</button>
        </a>
      </Card1>

      <Card2>
        <div>
          <img src={aircnc} alt="AirCnC" />
        </div>
        <h6>AirCnC</h6>
        <p>
          With this project the developer can rent a space inside IT companies
          to work, <br /> being an option to internet cafe
        </p>
        <a
          href="https://github.com/eltonlazzarin/aircnc-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>VIEW PROJECT</button>
        </a>
      </Card2>

      <Card3>
        <div>
          <img src={gobarber} alt="GoBarber" />
        </div>
        <h6>GoBarber</h6>
        <p>
          A barber scheduling app that allows users to schedule an appointment
          with his favorite <br />
          barber
        </p>
        <a
          href="https://github.com/eltonlazzarin/gobarber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>VIEW PROJECT</button>
        </a>
      </Card3>
    </Container>
  );
}
