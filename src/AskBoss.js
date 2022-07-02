import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const AskBoss = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w32toxr",
        "template_k1xkw0l",
        form.current,
        "Up_CldYfajT0iwiYB",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current.user_name)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>To</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default AskBoss