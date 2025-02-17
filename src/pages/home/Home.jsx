import React from "react";
import "./home.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { ImWondering } from "react-icons/im";
import { Link } from "react-router-dom";
import Ads from "../../components/ads/Ads";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="first-area">
            <Ads />

            <h2 className="main_title">
              무료 꿈해몽 풀이&nbsp;
              <FaRegPenToSquare />
            </h2>
            <ul>
              <li>
                <Link to={`/animal`}>동물</Link>
              </li>
              <li>
                <Link to={`/nature`}>자연</Link>
              </li>
              <li>
                <Link to={`/person`}>사람</Link>
              </li>
              <li>
                <Link to={`/action`}>행동</Link>
              </li>
              <li>
                <Link to={`/food`}>음식</Link>
              </li>
              <li>
                <Link to={`/body`}>신체</Link>
              </li>
            </ul>
          </section>

          <section className="intro">
            <h2>
              꿈해몽이란 무엇인가? 🌙✨
              <ImWondering />
            </h2>
            <p>
              <Link to={`/`}>꿈해몽</Link>이란 꿈을 해석하여 그 의미를 찾는 것을{" "}
              <br />
              말합니다. 꿈은 우리의 무의식에서 비롯된 심리적 현상으로,
              <br />
              때로는 현실과 깊은 연관이 있기도 합니다.
              <br />
              인간은 오랫동안 꿈을 단순한 상상이 아니라 미래를 예측하거나
              <br />
              내면의 상태를 반영하는 중요한 메시지로 여겨왔습니다.
              <br />
            </p>
            <p>
              고대부터 사람들은 꿈을 통해 신의 계시를 받거나 운명을 점쳤습니다.
              <br /> 예를 들어, 동양에서는 꿈이 길몽(吉夢)과 흉몽(凶夢)으로
              나뉘며,
              <br /> 길몽은 행운을 의미하고 흉몽은 주의를 요하는 경고로
              받아들였습니다.
              <br /> 서양에서도 프로이트와 융 같은 심리학자들이 꿈을 연구하며
              <br /> 그것이 인간의 무의식과 깊이 연결되어 있음을 밝혀냈습니다.
              <br />
            </p>
            <p>
              꿈의 해석은 다양한 요소에 따라 달라질 수 있습니다.
              <br />
              꿈속에서 등장하는 대상, 장소, 감정, 행동 등이 중요한 단서가
              됩니다. <br />
              예를 들어, 뱀이 나오는 꿈은 변화를 의미할 수 있으며,
              <br /> 높은 곳에서 떨어지는 꿈은 불안과 스트레스를 반영할 수
              있습니다.
              <br /> 반면, 돈을 줍는 꿈은 행운과 기회를 상징하기도 합니다.
              <br />
            </p>
            <p>
              하지만 꿈해몽은 반드시 정해진 의미를 가지는 것은 아닙니다.
              <br /> 같은 꿈이라도 꾸는 사람의 상황과 감정에 따라 다르게 해석될
              수 있습니다.
              <br />
              중요한 것은 꿈을 통해 자신의 내면을 돌아보고,
              <br /> 현재의 감정과 상태를 이해하는 것입니다.
              <br />
            </p>
            <p>
              결국 꿈해몽은 단순한 미신이 아니라, 우리의 무의식을 탐구하는
              하나의 도구입니다.
              <br /> 꿈이 전하는 메시지를 잘 해석하면,
              <br /> 현실에서 더 나은 선택을 할 수 있는 힌트를 얻을 수도
              있습니다.
              <br /> 혹시 최근에 기억에 남는 꿈을 꾼 적이 있나요?
              <br /> 그 꿈이 어떤 의미를 가질지 한 번 곰곰이 생각해보는 것도
              재미있을 것입니다. 😊✨
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Main;
