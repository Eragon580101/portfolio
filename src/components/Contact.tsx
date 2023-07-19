import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../Styles";
import { EarthCanvas } from ".";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_EMAILJS_TO_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Message Sent, I'll get back to you shortly");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("An error occurred, Please try again");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden pb-10">
      <motion.div
        variants={slideIn("left", "tween", 0.25, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            {" "}
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"  
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            {" "}
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"  
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            {" "}
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows={7}
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"  
            />
          </label>
          <button type="submit"
            className="bg-tertiay py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading? 'Sending....' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.25, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
