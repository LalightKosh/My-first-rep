import "./index.css";
import headerLogo from "./images/logo_place_header.svg";
import footerLogo from "./images/logo_place_footer.svg";
import headerImage from "./images/two_again.png";
import kaufmanTriangle from "./images/kaufman-triangle.svg";

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
        <h2 className="digits__title">Цифры и факты</h2>
        <h3 className="digits__subtitle">Про учебу и мозг</h3>
        <table className="digits__table">
          <tr>
            <td>
              <h4 className="table__title">86 миллиардов</h4>
              <p className="table__text">Число нейронов в мозге человека</p>
            </td>
            <td>
              <h4 className="table__title">2.1 миллиарда</h4>
              <p className="table__text">
                Число нуждающихся в повышении квалификации
              </p>
              <p className="bank">Всемирный Банк, 2017</p>
            </td>
            <td>
              <h4 className="table__title">1000 терабайт</h4>
              <p className="table__text">Объём памяти человека</p>
            </td>
            <td>
              <h4 className="table__title">500 триллионов</h4>
              <p className="table__text">
                Число ответственных за обучение нервных синапсов у взрослого
                человека
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="table__title">420 миллионов</h4>
              <p className="table__text">
                Число взрослых людей моложе 25 лет, не имеющих образования для
                трудоустройства
              </p>
              <p className="bank">Всемирный Банк, 2017</p>
            </td>
            <td>
              <h4 className="table__title">17–20 лет</h4>
              <p className="table__text">Пик обучаемости</p>
            </td>
            <td>
              <h4 className="table__title">1885 год</h4>
              <p className="table__text">Открытие кривой забывания</p>
            </td>
            <td>
              <h4 className="table__title">1889 год</h4>
              <p className="table__text">Открытие условного рефлекса</p>
            </td>
          </tr>
        </table>
      </section>
      <section className="feynman" height="890px">
        <h1 className="feynman__title">Метод Фейнмана</h1>
        <h2 className="feynman__subtitle">Выучить и не забыть.</h2>
        <a href="https://en.wikipedia.org/wiki/Wiki" className="feynman__link">
          Подробнее
        </a>
      </section>
      <section className="kaufman">
        <h2 className="kaufman__title">Принципы обучения</h2>
        <h3 className="kaufman__subtitle">От Джоша Кауфмана</h3>
        <table className="kaufman__table">
          <tr>
            <td>
              <h4 className="kaufman__table-title">1</h4>
              <p className="kaufman__table-text">
                Выберите привлекательный проект.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">2</h4>
              <p className="kaufman__table-text">
                Сосредоточьтесь на каком-то одном навыке.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">3</h4>
              <p className="kaufman__table-text">
                Определите целевой уровень мастерства.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">4</h4>
              <p className="kaufman__table-text">Разбейте навык на элементы.</p>
            </td>
            <td>
              <h4 className="kaufman__table-title">5</h4>
              <p className="kaufman__table-text">
                Приготовьте всё необходимое для занятий.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="kaufman__table-title">6</h4>
              <p className="kaufman__table-text">
                Устраните препятствия для занятий.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">7</h4>
              <p className="kaufman__table-text">
                Выделите специальное время для занятий.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">8</h4>
              <p className="kaufman__table-text">
                Создайте быстрые петли обратной связи.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">9</h4>
              <p className="kaufman__table-text">
                Занимайтесь по расписанию, короткими интенсивными интервалами.
              </p>
            </td>
            <td>
              <h4 className="kaufman__table-title">10</h4>
              <p className="kaufman__table-text">
                Уделяйте внимание количеству и скорости.
              </p>
            </td>
          </tr>
        </table>
        <img
          className="kaufmanTriangle"
          src={kaufmanTriangle}
          height="877px"
          width="877px"
          alt="Blue Triangle"
        />
      </section>
      <footer className="footer">
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
              <p className="copyright__author">© Виктор Абанькин</p>
            </div>
            <div className="column__content-info">
              <p className="content__column-heading">О практикуме</p>
              <div className="column-links">
                <a href="google.com" className="footer__links">
                  Главная
                </a>
                <a href="google.com" className="footer__links">
                  Концепция
                </a>
                <a href="google.com" className="footer__links">
                  Наставники
                </a>
              </div>
            </div>
            <div className="column__content-social">
              <p className="content__social-heading">Соцсети</p>
              <div className="column-links">
                <a href="facebook.com" className="footer__social-links">
                  Facebook
                </a>
                <a href="vk.ru" className="footer__social-links">
                  Вконтакте
                </a>
                <a href="instagram.com" className="footer__social-links">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
