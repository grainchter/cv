import s from "./Experience.module.scss";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className={s.container}>
          <h1 className={s.title}>Опыт работы</h1>
          <div className={s.wrap}>
            <div className={s.date}>
              <p>Октябрь 2021 — настоящее время</p>
              <p>Frontend-разработчик</p>
            </div>
            <div className={s.line}></div>
            <div className={s.info}>
              <p className={s.infoTitle}>
                Индивидуальное предпринимательство / частная практика / фриланс
              </p>
              <p>
                - адаптивная и кроссбраузерная верстка;
                <br />
                - добавление функциональности элементам сайта и написание
                скриптов;
                <br />- разработка клиентской части с использованием
                библиотек/фреймворков или же ванильного javascript;
              </p>
            </div>
          </div>
          <br />
          <div className={s.wrap}>
            <div className={s.date}>
              <p>2019</p>
              <p>Веб-мастер</p>
            </div>
            <div className={s.line}></div>
            <div className={s.info}>
              <p className={s.infoTitle}>ООО ВВК</p>
              <p>
                Поддержка сайта на CMS Bitrix:
                <br />
                - публикация контента
                <br />
                - доработка адаптивного шаблона
                <br />
                - поддержка интеграций со сторонними сервисами (в частности
                Trello)
                <br />
                P.S Эта компания обанкротилась, см.
                https://checko.ru/company/vvk-1144253000198
                <br />
                Незадолго до этого там перестали платить ЗП, так что мне
                пришлось уйти в другое место. И из-за срочности это оказалось не
                айти
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
