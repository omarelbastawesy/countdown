// STYLED
import {
  Wraper,
  Spantopright,
  Spantopleft,
  Spanbottomleft,
  Spantbottomright,
  Cont,
  SpantoprightBack,
  SpantopleftBack,
  SpanbottomleftBack,
  SpantbottomrightBack,
} from "./Card.styles";

const Card = (props) => {
  return (
    <Cont>
      <Wraper className={props.type}>
        <div className="top">
          <div className="front face">
            <span className="tens">{props.topFrontOnes}</span>
            <span className="ones">{props.topFrontTens}</span>
            <SpantoprightBack />
            <SpantopleftBack />
          </div>
          <div className="back face">
            <span className="tens">{props.topBackOnes}</span>
            <span className="ones">{props.topBackTens}</span>
            <Spantopright />
            <Spantopleft />
          </div>
        </div>

        <div className="bottom">
          <div className="front face">
            <span className="tens">0</span>
            <span className="ones">0</span>
            <SpanbottomleftBack />
            <SpantbottomrightBack />
          </div>
          <div className="back face">
            <span className="tens">{props.bottomBackOnes}</span>
            <span className="ones">{props.bottomBackTens}</span>
            <Spanbottomleft />
            <Spantbottomright />
          </div>
        </div>
      </Wraper>
      <p>{props.name}</p>
    </Cont>
  );
};

export default Card;
