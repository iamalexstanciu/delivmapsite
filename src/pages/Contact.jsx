import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <form action="https://formsubmit.co/Misterale22@gmail.com" method="POST">
        <input type="text" name="name" required placeholder="Your name" />
        <input type="email" name="email" required placeholder="Email address" />
        <textarea name="message" placeholder="Details of your problem" />
        <input type="file" name="attachment" accept="image/png, image/jpeg" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for the message, i will answer as soon as possible! Have a great day! Alex"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
