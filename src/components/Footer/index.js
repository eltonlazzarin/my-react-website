import React from "react";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

import { Container, Social } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Social>
        <div>
          <ul>
            <li>
              <a
                href="https://github.com/eltonlazzarin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eltonlazzarin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="mailto:elton.lazzarin@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={email} alt="Email" />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2019 Elton Lazzarin</p>
      </Social>
    </Container>
  );
}
