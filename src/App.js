// CONPONENTS
import Links from "./components/Links";
import Card from "./components/Card";

// STYLES
import { Container } from "./components/Container";
import { GlobalStyle } from "./GlobalStyles";
import { Wraper, Hills } from "./components/Contain";

// IAMGE
import bgImage from "./images/bg-stars.png";
import hills from "./images/pattern-hills.png";

function App() {
  return (
    <Wraper image={bgImage}>
      <h3>WE'RE LAUNCHING SOON</h3>
      <Container>
        <Card
          type="days"
          name="Days"
          topFrontOnes="0"
          topFrontTens="8"
          topBackOnes="0"
          topBackTens="8"
          bottomBackOnes="0"
          bottomBackTens="8"
        />
        <Card
          type="hours"
          name="Hours"
          topFrontOnes="2"
          topFrontTens="3"
          topBackOnes="2"
          topBackTens="3"
          bottomBackOnes="2"
          bottomBackTens="3"
        />
        <Card
          type="minutes"
          name="Minutes"
          topFrontOnes="5"
          topFrontTens="5"
          topBackOnes="5"
          topBackTens="5"
          bottomBackOnes="5"
          bottomBackTens="5"
        />
        <Card
          type="seconds"
          name="Seconds"
          topFrontOnes="4"
          topFrontTens="1"
          topBackOnes="4"
          topBackTens="1"
          bottomBackOnes="4"
          bottomBackTens="1"
        />
      </Container>
      <Hills image={hills}>
        <Links />
      </Hills>
      <GlobalStyle />
    </Wraper>
  );
}

export default App;
