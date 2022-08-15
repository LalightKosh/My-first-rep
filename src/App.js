import "./index.css";
import headerLogo from "./images/logo_place_header.svg";
import headerImage from "./images/two_again.png";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <img
          className="header__logo"
          src={headerLogo}
          width="228px"
          height="32px"
          alt="logo"
        />
        <h1 classnames="title">Научиться учиться</h1>
        <p classnames="subtitle">
          Какие современные и эффективные подходы к обучению вы можете
          использовать в своей жизни?
          <a href="https://en.wikipedia.org/wiki/Wiki">Узнать</a>
        </p>
        <img
          className="header__image"
          src={headerImage}
          height="608px"
          width="765px"
          alt="Family_picture"
        />
        <div class="header__square-pic" />
      </header>

      <div class="content">
        <div class="description">
          <div class="two-columns">
            <div class="brief">Главные проблемы в обучении</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
