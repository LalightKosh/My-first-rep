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
        <h1 className="header__title">Научиться учиться</h1>
        <p className="header__subtitle">
          Какие современные и эффективные подходы к обучению вы можете
          использовать в своей жизни?&nbsp;
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

      <section className="content__description">
        <div className="description__two-columns">
          <h3 className="two-columns__brief">Главные проблемы в обучении</h3>
          <div className="two-columns__main-text">
            <p className="description__p">
              Ни в школе, ни в институте нас не учат тому, как правильно изучать
              материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся
              решать однообразные задачи, чтобы лучше сдать тест, но часто в
              итоге это не дает нам реального знания. Зубрежка быстро
              выветривается и не приносит пользы.
            </p>
            <p className="description__p">
              <span className="span-accent">Вывод:</span> учиться тоже нужно
              уметь, но почему-то этому мало где учат. Что с этим делать?
            </p>
            <p className="description__p">
              Конкретные техники и упражнения помогают изменить подход к
              обучению, сделать его эффективным и захватывающим. Эти же техники
              применяются на примере обучения в Практикуме.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
