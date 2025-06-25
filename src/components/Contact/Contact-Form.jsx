import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="main-form">
        <label htmlFor="email"></label>
        <input type="text" name="email" id="email" />
        <label htmlFor="mob"></label>
        <input type="text" name="mob" id="mob" />
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" />
        <label htmlFor="msg"></label>
        <input type="text" name="msg" id="msg" />
        <button type="submit">Send</button>
      </div>
    </>
  );
};

export default ContactForm;
