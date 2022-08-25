import s from "./Education.module.scss";

const MobileEducation = () => {
  return (
    <>
      <section id="education">
        <div className={s.container}>
          <h1 className={s.title}>Образование</h1>
          <div className={s.wrap}>
            <div className={s.date}>
              <p>2015 - 2019</p>
            </div>
            <div className={s.line}></div>
            <div className={s.info}>
              <p className={s.infoTitle}>
                КГБПОУ "Бийский государственный колледж"
              </p>
              <p>Информационные системы, Информационные системы по отраслям</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileEducation;
