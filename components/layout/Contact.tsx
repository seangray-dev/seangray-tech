import React from "react";

const Contact = () => {
  return (
    <section className="container">
      <div className="mb-10 flex flex-col gap-5 text-center">
        <h2 className="pt-14 text-4xl font-bold">Contact</h2>
        <p>
          Whether you're looking to collaborate on an exciting project or
          seeking a dedicated developer for your team, I'm eager to discuss how
          I can contribute. Drop me a message, and I'll respond at my earliest
          opportunity.
        </p>
      </div>
      <form
        className="flex flex-col gap-8"
        action="https://submit-form.com/UiPmNRU3"
      >
        <div className="">
          <label aria-label="name" htmlFor="name" className="hidden">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label aria-label="email" htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label aria-label="message" htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            className="w-full bg-transparent"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
