import "./index.css";
import headerLogo from "./images/logo_place_header.svg";
import footerLogo from "./images/logo_place_footer.svg";
import headerImage from "./images/two_again.png";
import triangleImage from "./images/kaufman-triangle.svg";
import attentionImage from "./images/cards-attention.png";

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
          <a href="https://en.wikipedia.org/wiki/Wiki"  className="header__link transparent-link">
            Узнать →
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

      <section className="techniques">
        <h2 className="section-title">Техники обучения</h2>
          <h3 className = "section-subtitle">Пять практик от Барбары Оакли</h3>
          <ul className="techniques__cards">
            <li className = "techniques__cards-item">
              <img
                className="techniques__card-image"
                src={attentionImage}
                width="160px"
                height="160px"
                alt="Hands with a book"
              />
              <h4 className = "techniques__card-title">Два вида внимания</h4>
              <p className = "techniques__card-description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>
            <li className = "techniques__cards-item">
              <img
                className="techniques__card-image"
                src={attentionImage}
                width="160px"
                height="160px"
                alt="Hands with a book"
              />
              <h4 className = "techniques__card-title">Два вида внимания</h4>
              <p className = "techniques__card-description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>
            <li className = "techniques__cards-item">
              <img
                className="techniques__card-image"
                src={attentionImage}
                width="160px"
                height="160px"
                alt="Hands with a book"
              />
              <h4 className = "techniques__card-title">Два вида внимания</h4>
              <p className = "techniques__card-description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>
            <li className = "techniques__cards-item">
              <img
                className="techniques__card-image"
                src={attentionImage}
                width="160px"
                height="160px"
                alt="Hands with a book"
              />
              <h4 className = "techniques__card-title">Два вида внимания</h4>
              <p className = "techniques__card-description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>
            <li className = "techniques__cards-item">
              <img
                className="techniques__card-image"
                src={attentionImage}
                width="160px"
                height="160px"
                alt="Hands with a book"
              />
              <h4 className = "techniques__card-title">Два вида внимания</h4>
              <p className = "techniques__card-description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>
          </ul>
      </section>

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
        <h2 className="section-title">Цифры и факты</h2>
        <h3 className="section-subtitle">Про учебу и мозг</h3>
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
        <a href="https://en.wikipedia.org/wiki/Wiki" className="feynman__link  transparent-link">
          Подробнее →
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
          className="kaufman__triangle"
          src={triangleImage}
          height="877px"
          width="877px"
          alt="Kaufman Triangle"
        />
          </section>
      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__content">
            <div className="footer__content-column content__copyright">
              <img
                className="footer__logo"
                src={footerLogo}
                width="228px"
                height="32px"
                alt="logo"
              />
              <p className="copyright__author">© Виктор Абанькин</p>
            </div>
            <div className="footer__content-column content__info">
              <p className="footer__heading">О Практикуме</p>
              <div className="content__info-links">
                <a href="https://google.com" className="footer__link transparent-link">
                  Главная
                </a>
                <a href="https://google.com" className="footer__link transparent-link">
                  Концепция
                </a>
                <a href="https://google.com" className="footer__link transparent-link">
                  Наставники
                </a>
              </div>
            </div>
            <div className="footer__content-column content_social">
              <p className="footer__heading">Соцсети</p>
              <div className="content__social-links">
                <a href="https://facebook.com" className="footer__link transparent-link">
                  Facebook
                </a>
                <a href="https://vk.ru" className="footer__link transparent-link">
                  Вконтакте
                </a>
                <a href="https://instagram.com" className="footer__link transparent-link">
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
