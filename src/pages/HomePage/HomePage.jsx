import { useEffect } from "react";
import {
  Heading,
  Heading2,
  Heading3,
  Section,
  Pargaraph,
  BasicList,
} from "../../components/Global.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectIsLoading, selectUsers } from "../../redux/users/selectors";
import { InfoParagraph } from "../../components/Global.styled";
import { Loader } from "../../components/Common/Loader/Loader";

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!users) dispatch(fetchUsers());
  }, [dispatch, users]);
  return (
    <>
      {isLoading || !users ? (
        <>
          <InfoParagraph style={{ width: 600, margin: "0 auto" }}>
            Будь ласка зачекайте! Бекенд частина проекту розміщена на
            безкоштовному акаунті Render. Тому переше завантаження може займати
            до 1хв.
          </InfoParagraph>
          <Loader />
        </>
      ) : (
        <>
          <Heading>Tweets project by Chyhryn Oleksandr</Heading>
          <Section>
            <Pargaraph style={{ textAlign: "center", color: "#5cd3a8" }}>
              Tweets project знаходиться на стадії розробки. Мета: Створити
              проект-імітацію соціальної мережі.
            </Pargaraph>
            <Heading2>Опис останньої версії</Heading2>
            <Heading3>Бекенд частина</Heading3>
            <Pargaraph>
              <b style={{ color: "red" }}>Увага!</b> Бекенд частина проекту
              розміщена на безкоштовному акаунті Render. Тому перше завантаження
              сайту може займати до 1хв.
            </Pargaraph>
            <Heading3>Реєстрація та логін</Heading3>
            <Pargaraph>
              Додана можливість реєстраціє та логінізації через відповідні
              сторінки.
            </Pargaraph>
            <Heading3>Сторінка Tweets</Heading3>
            <Pargaraph>
              При переході на сторінку /tweets проект забирає з бекенда список
              юзерів та відображає його на сторінці у вигляді карток з
              інформацією про кількість твітів та фоловерів. У кожної картки є
              інтерактивна кнопка з логікою підписки/відписки. При натисканні на
              кнопку змінюється стан та кількість підписників незалежно у
              кожного юзера.
            </Pargaraph>
            <Pargaraph style={{ marginBottom: 10 }}>
              Також на сторінці /tweets реалізовано:
            </Pargaraph>
            <BasicList style={{ marginBottom: 20 }}>
              <li>Пагінація через кнопку Load more;</li>
              <li>
                Можливість повернення на попередню сторінку через кнопку Back;
              </li>
              <li>Фільтрація карток юзерів через dropdown список;</li>
            </BasicList>

            <Heading3>Сторінка 404</Heading3>
            <Pargaraph>
              При переході за не існуючим маршрутом користувач перенаправляється
              на кастомну 404 сторінку. Через 5 секунд користивача буде
              автоматично перенаправлено на головну сторінку.
            </Pargaraph>
            <Heading2>
              Технології, які використовувалися в процесі розробки
            </Heading2>
            <BasicList>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Router</li>
              <li>React Toolkit</li>
              <li>Redux</li>
              <li>Styled Components</li>
              <li>Axios</li>
              <li>PropTypes</li>
              <li>MockAPI</li>
              <li>Node.js</li>
              <li>Express</li>
            </BasicList>
          </Section>
        </>
      )}
    </>
  );
};
