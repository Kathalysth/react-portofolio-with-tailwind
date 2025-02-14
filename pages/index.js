import Head from "next/head";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import frameworks from "../public/Code Development _Two Color.svg";
import versionControl from "../public/Startup_Monochromatic.svg";
import chatSvg from "../public/Chat_Monochromatic.svg";
import programming from "../public/Javascript_Monochromatic.svg";
import Projects from "../components/Projects";
import { projects } from "../projects";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import Skills from "../components/Skills";

const MySwal = withReactContent(Swal);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nameValue, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
  }, []);

  function handleFormSubmit() {
    setIsLoading(true);
    fetch("https://formsubmit.co/ajax/ambyehigimetor@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        email: email,
        subject: "Reached out from Porfolio",
        message: messageValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        MySwal.fire({
          title: `Thank You, <strong style="text-transform: capitalize;">${nameValue}</strong>!`,
          html: `I appreciate you taking the time to reach out!`,
          icon: "success",
        });
        setEmail("");
        setMessage("");
        setName("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        MySwal.fire("Something went wrong!", "Please try again!", "error");
      });
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className={`bg-white ${darkMode ? "dark" : ""}`}>
        <Head>
          <title>Chris Ehigimetor</title>
          <meta
            name="portfolio"
            content="Chris Ehigimetor Portfolio created with nextjs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero setDark={setDarkMode} dark={darkMode} />
        <main className="px-6 dark:bg-gray-900 md:px-10 lg:px-30">
          <About />
          <Skills />
          <section>
            <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-teal-600">
                    Skills
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {/* Everything you need to know about me */}
                  </p>
                  <div className="lg:flex gap-10">
                    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-700 flex-1">
                      <Image
                        src={programming}
                        width={200}
                        height={200}
                        alt="languages figure"
                      />
                      <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                        Languages
                      </h3>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Javascript
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        C#
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Java
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Python
                      </p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
                      <Image
                        src={frameworks}
                        width={200}
                        height={200}
                        alt="technologies figure"
                      />
                      <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                        Technologies and Frameworks
                      </h3>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        React
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Spring Boot
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        .Net
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Vue
                      </p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
                      <Image
                        src={versionControl}
                        width={200}
                        height={200}
                        alt="verson control figure"
                      />
                      <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                        CI/CD
                      </h3>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Linux
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Scrum
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Git
                      </p>
                      <p className="text-gray-900 dark:text-gray-200 py-1">
                        Docker
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white font-bold ">
                Projects
              </h3>
            </div>
            <div className="flex gap-5 justify-center py-10 flex-wrap">
              {projects.map((project, index) => (
                <Projects
                  key={`${project.title}-${index}`}
                  project={project}
                  number={index + 1}
                />
              ))}
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl font-bold py-1 dark:text-white ">
                Lets Talk
              </h3>
              <p className="text-teal-500 py-4">Drop a message!</p>
              <div className="w-full flex  flex-wrap md:justify-between items-center">
                <div
                  data-aos="fade-up-right"
                  data-aos-once="true"
                  className="w-full md:w-2/5 h-80 flex justify-center"
                >
                  <Image src={chatSvg} className="w-full" alt="chat" />
                </div>
                <form
                  data-aos="fade-up-left"
                  data-aos-once="true"
                  id="letsTalk"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                  className="w-full md:w-3/5"
                >
                  <div className="w-6/6 flex flex-col mb-4">
                    <label
                      className="mb-2 text-gray dark:text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      required
                      title="Name"
                      name="name"
                      value={nameValue}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name"
                      className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                    />
                  </div>
                  <div className="w-6/6 flex flex-col mb-4">
                    <label
                      className="mb-2 text-gray dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      required
                      title="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="web@example.com"
                      className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                    />
                  </div>
                  <div className="w-6/6 flex flex-col mb-4">
                    <label
                      className="mb-2 text-gray dark:text-white"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={messageValue}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows="5"
                      placeholder="Type a message..."
                      className="resize-none p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"
                    />
                  </div>
                  <div className="w-6/6">
                    <button
                      className="bg-teal-500 w-100 block text-white p-2"
                      disabled={isLoading ? true : false}
                    >
                      {isLoading ? "...Please Wait" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
