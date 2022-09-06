import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/66b92751-878c-4672-9668-47eabe8d1f26"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 p-4">
            Submit the form below or send me an email:
            ihuoma.franchesca@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 outline-0 rounded"
          type="text"
          placeholder="Type Your Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 outline-0 rounded"
          type="email"
          placeholder="Type Your Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-0 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
