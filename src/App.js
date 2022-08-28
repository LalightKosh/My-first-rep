import "./index.css";
import headerLogo from "./images/logo_place_header.svg";
import footerLogo from "./images/logo_place_footer.svg";
import headerImage from "./images/two_again.png";
import feynman from "./images/feynman.png";
import kaufman_triangle from "./images/kaufman-triangle.svg";

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
          использовать в своей жизни?
          <a href="https://en.wikipedia.org/wiki/Wiki" className="header__link">
            Узнать
          </a>
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

      <section className="description">
        <div className="description__two-columns">
          <h3 className="description__header">Главные проблемы в обучении</h3>
          <div className="description__main-text">
            <p className="description__text">
              Ни в школе, ни в институте нас не учат тому, как правильно изучать
              материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся
              решать однообразные задачи, чтобы лучше сдать тест, но часто в
              итоге это не дает нам реального знания. Зубрежка быстро
              выветривается и не приносит пользы.
            </p>
            <p className="description__text">
              <span className="span-accent">Вывод:</span> учиться тоже нужно
              уметь, но почему-то этому мало где учат. Что с этим делать?
            </p>
            <p className="description__text">
              Конкретные техники и упражнения помогают изменить подход к
              обучению, сделать его эффективным и захватывающим. Эти же техники
              применяются на примере обучения в Практикуме.
            </p>
          </div>
        </div>
      </section>
      <section className="digits">
        <h3 className="digits__title">Цифры и факты</h3>
        <h2 className="digits__subtitle">Про учебу и мозг</h2>
        <table className="digits__table">
          <tr>
            <td>
              <p className="table__title">86 миллиардов</p>
              <p className="table__text">Число нейронов в мозге человека</p>
            </td>
            <td>
              <p className="table__title">2.1 миллиарда</p>
              <p className="table__text">
                Число нуждающихся в повышении квалификации
              </p>
              <p className="bank">Всемирный Банк, 2017</p>
            </td>
            <td>
              <p className="table__title">1000 терабайт</p>
              <p className="table__text">Объём памяти человека</p>
            </td>
            <td>
              <p className="table__title">500 триллионов</p>
              <p className="table__text">
                Число ответственных за обучение нервных синапсов у взрослого
                человека
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="table__title">420 миллионов</p>
              <p className="table__text">
                Число взрослых людей моложе 25 лет, не имеющих образования для
                трудоустройства
              </p>
              <p className="bank">Всемирный Банк, 2017</p>
            </td>
            <td>
              <p className="table__title">17–20 лет</p>
              <p className="table__text">Пик обучаемости</p>
            </td>
            <td>
              <p className="table__title">1885 год</p>
              <p className="table__text">Открытие кривой забывания</p>
            </td>
            <td>
              <p className="table__title">1889 год</p>
              <p className="table__text">Открытие условного рефлекса</p>
            </td>
          </tr>
        </table>
      </section>
      <section className="feynman" height="890px">
        <h1 className="feynman__title">Метод Фейнмана</h1>
        <h2 className="feynman__subtitle">Выучить и не забыть.</h2>
        <img
          className="feynman__portrait"
          src={feynman}
          width="867px"
          height="637px"
          alt="Portrait of Feynman"
        />
        <a href="https://en.wikipedia.org/wiki/Wiki" className="feynman__link">
          Подробнее
        </a>
      </section>
      <section className="kaufman">
        <h3 className="kaufman__title">Принципы обучения</h3>
        <h2 className="kaufman__subtitle">От Джоша Кауфмана</h2>
        <table className="kaufman__table">
          <tr>
            <td>
              <p className="kaufman__table__title">1</p>
              <p className="kaufman__table__text">
                Выберите привлекательный проект.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">2</p>
              <p className="kaufman__table__text">
                Сосредоточьтесь на каком-то одном навыке.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">3</p>
              <p className="kaufman__table__text">
                Определите целевой уровень мастерства.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">4</p>
              <p className="kaufman__table__text">
                Разбейте навык на элементы.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">5</p>
              <p className="kaufman__table__text">
                Приготовьте всё необходимое для занятий.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="kaufman__table__title">6</p>
              <p className="kaufman__table__text">
                Устраните препятствия для занятий.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">7</p>
              <p className="kaufman__table__text">
                Выделите специальное время для занятий.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">8</p>
              <p className="kaufman__table__text">
                Создайте быстрые петли обратной связи.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">9</p>
              <p className="kaufman__table__text">
                Занимайтесь по расписанию, короткими интенсивными интервалами.
              </p>
            </td>
            <td>
              <p className="kaufman__table__title">10</p>
              <p className="kaufman__table__text">
                Уделяйте внимание количеству и скорости.
              </p>
            </td>
          </tr>
        </table>
        <img
          className="kaufman_triangle"
          src={kaufman_triangle}
          height="877px"
          width="877px"
          alt="Blue Triangle"
        />
      </section>
      <section className="footer">
        <div className="columns">
          <div className="column__content">
            <div className="content__copyright">
              <img
                className="footer__logo"
                src={footerLogo}
                width="228px"
                height="32px"
                alt="logo"
              />
              <p className="copyright__author">&copy; Виктор Абанькин</p>
            </div>
            <div className="column__content__info">
              <p className="content__column-heading">О практикуме</p>
              <div className="column-links">
                <p className="footer__links">Главная</p>
                <p className="footer__links">Концепция</p>
                <p className="footer__links">Наставники</p>
              </div>
            </div>
            <div className="column__content__social">
              <p className="content__social-heading">Соцсети</p>
              <div className="column-links">
                <p className="footer__social-links">Facebook</p>
                <p className="footer__social-links">Вконтакте</p>
                <p className="footer__social-links">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
