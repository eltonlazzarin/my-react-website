import React from "react";

import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

import { Container, Content, Social } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <a href="/portfolio-website">
            <img src={logo} alt="Logo" />
          </a>
        </nav>

        <aside>
          <ul>
            <li>
              <a href="/portfolio-website/about">about</a>
            </li>
            <li>
              <a href="/portfolio-website/portfolio">portfolio</a>
            </li>
          </ul>

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
          </Social>
        </aside>
      </Content>
    </Container>
  );
}
