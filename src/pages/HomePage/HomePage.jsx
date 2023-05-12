import {
  Heading,
  Heading2,
  Heading3,
  Section,
  Pargaraph,
  BasicList,
} from "../../components/Global.styled";

export const HomePage = () => {
  return (
    <>
      <Heading>Tweets project by Chyhryn Oleksandr</Heading>
      <Section>
        <Pargaraph style={{ textAlign: "center", color: "#5cd3a8" }}>
          Tweets project знаходиться на стадії розробки. Мета: Створити
          проект-імітацію соціальної мережі.
        </Pargaraph>
        <Heading2>Опис останньої версії</Heading2>
        <Heading3>Сторінка Tweets</Heading3>
        <Pargaraph>
          При переході на сторінку /tweets проект забирає з бекенда список
          юзерів та відображає його на сторінці у вигляді карток з інформацією
          про кількість твітів та фоловерів. У кожної картки є інтерактивна
          кнопка з логікою підписки/відписки. При натисканні на кнопку
          змінюється стан та кількість підписників незалежно у кожного юзера.
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
          При переході за не існуючим маршрутом користувач перенаправляється на
          кастомну 404 сторінку. Через 5 секунд користивача буде автоматично
          перенаправлено на головну сторінку.
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
        </BasicList>
      </Section>
    </>
  );
};
