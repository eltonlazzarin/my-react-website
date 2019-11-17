import React from "react";

import knowledges from "../../assets/knowledges.png";

import { Container, AboutItem, Knowledges, Designer, Coder } from "./styles";

export default function About() {
  return (
    <Container>
      <AboutItem>
        <strong>about me</strong>
        <h4>
          I'm a Full stack developer based in warm São José do Rio Preto,
          Brazil.
        </h4>
        <p>
          I enjoy turning complex problems into simple, beautiful and intuitive
          designs. When I'm not coding, tweeting or pushing pixels, you'll find
          me cooking, gardening or working out in the park.
        </p>
      </AboutItem>
      <Knowledges>
        <h4>Knowledges</h4>
        <img src={knowledges} alt="Knowledges" />
      </Knowledges>

      <Designer>
        <h4>Part Designer</h4>
        <p>UX design</p>
        <p>UI design</p>
        <p>Interaction design</p>
        <p>Research</p>
      </Designer>
      <Coder>
        <h4>Part Coder</h4>
        <p>Front-end development (ReactJS, React Native)</p>
        <p>Back-end development (NodeJS, AdonisJS)</p>
        <p>HTML / CSS</p>
        <p>JavaScript</p>
      </Coder>
    </Container>
  );
}
