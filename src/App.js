import "./index.css";
import headerLogo from "./images/logo_place_header.svg";
import footerLogo from "./images/logo_place_footer.svg";
import headerImage from "./images/two_again.png";
import triangleImage from "./images/kaufman-triangle.svg";
import attentionImage from "./images/cards-attention.png";
import competenceImage from "./images/cards-competence.png";
import interlivingImage from "./images/cards-interliving.png";
import questionImage from "./images/cards-question.png";
import recallImage from "./images/cards-recall.png";
import khanbookImage from "./images/khan-book.jpg";
import arzamasLogo from "./images/resources-arzamas.svg";
import n1Logo from "./images/resources-n1.svg";
import polkaLogo from "./images/resources-polka.svg";
import strelkaLogo from "./images/resources-strelka.svg";
import facebookLogo from "./images/facebook_color_white.svg";
import instagramLogo from "./images/instagram_color_white.svg";
import vkLogo from "./images/vk_color_white.svg";

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
          <a
            href="https://en.wikipedia.org/wiki/Wiki"
            className="header__link transparent-link"
          >
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
      <section className="description">
        <div className="two-columns">
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

      <section className="techniques">
        <h2 className="section-title">Техники обучения</h2>
        <h3 className="section-subtitle">Пять практик от Барбары Оакли</h3>
        <ul className="techniques__cards">
          <li className="techniques__cards-item">
            <img
              className="techniques__card-image"
              src={attentionImage}
              width="160px"
              height="160px"
              alt="Hands with a book"
            />
            <h4 className="techniques__card-title">Два вида внимания</h4>
            <p className="techniques__card-description">
              Глубокие знания возникают, если чередовать сфокусированное и
              рассеянное мышление.
            </p>
          </li>
          <li className="techniques__cards-item">
            <img
              className="techniques__card-image"
              src={recallImage}
              width="160px"
              height="160px"
              alt="A hand holding a pile of books"
            />
            <h4 className="techniques__card-title">Recall</h4>
            <p className="techniques__card-description">
              Вспоминайте изученное — это позволит соединить разрозненные порции
              памяти.
            </p>
          </li>
          <li className="techniques__cards-item">
            <img
              className="techniques__card-image"
              src={interlivingImage}
              width="160px"
              height="160px"
              alt="A bridge"
            />
            <h4 className="techniques__card-title">Интерливинг</h4>
            <p className="techniques__card-description">
              Изучайте несколько навыков одновременно, они обогащают друг друга.
            </p>
          </li>
          <li className="techniques__cards-item">
            <img
              className="techniques__card-image"
              src={questionImage}
              width="160px"
              height="160px"
              alt="A person in a museum"
            />
            <h4 className="techniques__card-title">Вопросы</h4>
            <p className="techniques__card-description">
              Слушая преподавателя, придумывайте хороший вопрос, который вас
              действительно волнует.
            </p>
          </li>
          <li className="techniques__cards-item">
            <img
              className="techniques__card-image"
              src={competenceImage}
              width="160px"
              height="160px"
              alt="A greek statue"
            />
            <h4 className="techniques__card-title">Иллюзия компетентности</h4>
            <p className="techniques__card-description">
              Повторите про себя, запишите, расскажите другу: вам только
              кажется, что вы владеете новой темой.
            </p>
          </li>
        </ul>
      </section>
      <section className="videos">
        <h2 className="section-title">Видео на TED</h2>
        <h3 className="section-subtitle">
          Для тех, кто любит прокрастинировать
        </h3>
        <div className="videos__youtube">
          <iframe
            className="videos__youtube-video"
            width="515"
            height="316"
            src="https://www.youtube.com/embed/5MgBikgcWnY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="videos__youtube-video"
            width="515"
            height="316"
            src="https://www.youtube.com/embed/arj7oStGLkU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="oakley">
        <div className="two-columns">
          <h3 className="oakley__header">История Барбары Оакли.</h3>
          <div className="oakley__main-text">
            <p className="oakley__text">
              С детства Барбаре не давалась математика. Она считала себя
              законченным гуманитарием, причём далеко не самым умным. В армии
              она изучала русский язык, чтобы получить надбавку, да так успешно,
              что её выдвинули в командиры. Но для продвижения по службе нужно
              было сдавать математику. И тогда Барбара придумала свой подход к
              точным наукам. Оказалось, если вам что-то «плохо даётся», ваши
              добытые трудом знания гораздо глубже, чем у тех, кому всё ясно с
              первого взгляда.
            </p>
          </div>
        </div>
      </section>
      <section className="feynman" height="890px">
        <h1 className="feynman__title">Метод Фейнмана</h1>
        <h2 className="feynman__subtitle">Выучить и не забыть.</h2>
        <a
          href="https://en.wikipedia.org/wiki/Wiki"
          className="feynman__link  transparent-link"
        >
          Подробнее →
        </a>
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
      <section className="khan">
        <div className="khan__content">
          <subtitle className="khan__subtitle">Салман Хан</subtitle>
          <h3 className="khan__title">Весь мир — школа</h3>
          <p className="khan__main-text">
            Страсть и новаторство Сала Хана меняют процесс обучения миллионов
            студентов по всему миру. Книгу «Весь мир — школа» нужно прочитать
            всем, кто занимается образованием — так учащиеся повсюду смогут
            получить навыки и знания, которые приносят успех в школе, карьере и
            жизни.
          </p>
          <author className="khan__author">Джордж Лукас</author>
          <p className="khan__job">Кинорежиссер, продюсер</p>
          <div className="khan__book-container">
            <img
              className="khan__book"
              src={khanbookImage}
              width="620px"
              height="608px"
              alt="The book of Salman Khan"
            />
            <a className="khan__link transparent-link" href="https://ozon.ru/">
              Купить книгу →
            </a>
          </div>
        </div>
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
      <section className="resources">
        <h2 className="section-title">Полезные ресурсы</h2>
        <h3 className="section-subtitle">
          Больше материалов о техниках и лайфхаках обучения
        </h3>
        <ul className="resources__logos" width="1100px">
          <a href="#">
            <img
              className="resources__arzamas"
              src={arzamasLogo}
              height="38px"
              width="270px"
              alt="Logo of Arzamas"
            />
          </a>
          <a href="#">
            <img
              className="resources__n1"
              src={n1Logo}
              height="38px"
              width="270px"
              alt="Logo of N1"
            />
          </a>
          <a href="#">
            <img
              className="resources__polka"
              src={polkaLogo}
              height="38px"
              width="270px"
              alt="Logo of Polka"
            />
          </a>
          <a href="#">
            <img
              className="resources__strelka"
              src={strelkaLogo}
              height="38px"
              width="270px"
              alt="Logo of Strelka"
            />
          </a>
        </ul>
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
                <a
                  href="https://google.com"
                  className="footer__link transparent-link"
                >
                  Главная
                </a>
                <a
                  href="https://google.com"
                  className="footer__link transparent-link"
                >
                  Концепция
                </a>
                <a
                  href="https://google.com"
                  className="footer__link transparent-link"
                >
                  Наставники
                </a>
              </div>
            </div>
            <div className="footer__content-column content_social">
              <p className="footer__heading">Соцсети</p>
              <div className="content__social-links">
                <a
                  href="https://facebook.com"
                  className="footer__link transparent-link"
                >
                  <img
                    className="footer__logo"
                    src={facebookLogo}
                    width="16px"
                    height="16px"
                    alt="Facebook Logo"
                  />
                  Facebook
                </a>
                <a
                  href="https://vk.ru"
                  className="footer__link transparent-link"
                >
                  <img
                    className="footer__logo"
                    src={instagramLogo}
                    width="16px"
                    height="16px"
                    alt="Instagram Logo"
                  />
                  Вконтакте
                </a>
                <a
                  href="https://instagram.com"
                  className="footer__link transparent-link"
                >
                  <img
                    className="footer__logo"
                    src={vkLogo}
                    width="16px"
                    height="16px"
                    alt="VK Logo"
                  />
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
