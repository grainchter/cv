import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Preloader from "../../preloader/Preloader";
import s from "./Feedback.module.scss";

const MobileFeedback = () => {
  const [activePreloader, setActivePreloader] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const styles = {
    error: {
      borderColor: "red",
    },
    succes: {
      borderColor: "#4a0260b9",
    },
  } as const;

  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]+)$/;

    if (reg.test(e.currentTarget.value) === false) {
      setEmailValid(false);
    } else if (reg.test(e.currentTarget.value) === true) {
      setEmailValid(true);
      setEmail(e.currentTarget.value);
    }
  };

  const onChangeMessage = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setActivePreloader(true);

    e.preventDefault();
    if (
      name == null ||
      email == null ||
      emailValid == false ||
      message == null
    ) {
      setActivePreloader(false);

      toast.error("Пожалуйста, проверьте правильность введенных данных", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (name && email && emailValid && message) {
      emailjs
        .sendForm(
          "service_43cc4ix",
          "template_djaq5lh",
          e.currentTarget,
          "_inDJMpeux6TizrxN"
        )
        .then(
          (result) => {
            setActivePreloader(false);
            toast.success("Успех", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          },
          (error) => {
            setActivePreloader(false);
            toast.error(error.text, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <section id="feedback">
        {activePreloader === true && <Preloader />}
        {activePreloader === false && (
          <div className={s.container}>
            <form onSubmit={handleSubmit}>
              <h1 className={s.title}>Свяжитесь со мной</h1>
              <input
                type="text"
                className={s.info}
                placeholder="Имя"
                name="name"
                onChange={onChangeName}
                style={name ? styles.succes : styles.error}
              />

              <input
                type="email"
                className={s.info}
                placeholder="Электронная почта"
                name="email"
                onChange={onChangeEmail}
                style={email && emailValid ? styles.succes : styles.error}
                title="Электронная почта должна быть в виде something@something.something"
              />

              <textarea
                className={s.message}
                placeholder="Добавить сообщение..."
                name="message"
                onChange={onChangeMessage}
                style={message ? styles.succes : styles.error}
              />
              <button type="submit" className={s.button}>
                Отправить
              </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default MobileFeedback;
