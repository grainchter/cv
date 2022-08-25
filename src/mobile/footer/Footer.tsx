import s from "./Footer.module.scss";

const MobileFooter = () => {
  return (
    <>
      <div className={s.wrap}>
        <small>
          <p className={s.leftstr}>Copyright © 2022 Яна Казакова</p>
        </small>
      </div>
    </>
  );
};

export default MobileFooter;
