import Head from "next/head";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect } from "react";
import frameworks from "../public/Code Development _Two Color.svg";
import versionControl from "../public/Startup_Monochromatic.svg";
import chatSvg from "../public/Chat_Monochromatic.svg";
import portrait from "../public/my-portrait.jpg";
import programming from "../public/Javascript_Monochromatic.svg";
import Projects from "../components/Projects";
import { projects } from "../projects";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySwal = withReactContent(Swal);

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: `0.25em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
const me = "Chris Ehigimetor";
const role = "Software  Engineer";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nameValue, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");
  const { scrollYProgress } = useScroll();

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

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
        MySwal.fire(
          "Thank You!",
          `I appreciate you ${nameValue} for taking the time to reach out!`,
          "success"
        );
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
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Chris Ehigimetor</title>
          <meta
            name="portfolio"
            content="Chris Ehigimetor Portfolio created with nextjs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-white px-6 dark:bg-gray-900 md:px-10 lg:px-30">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl">{me}</h1>
              <ul className="flex items-center">
                <li className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="  text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="Chris_ehigimetor_cv.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center py-10 flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div className="mx-auto flex justify-center relative overflow-hidden">
                  <Image
                    src={portrait}
                    className="rounded-full"
                    objectFit="cover"
                    width={400}
                    height={400}
                  />
                </div>
                <h2 className="text-3xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-4xl">
                  {me.split("").map((c, i) => (
                    <motion.span
                      ref={ref}
                      initial="hidden"
                      aria-hidden="true"
                      key={i}
                      animate={ctrls}
                      variants={characterAnimation}
                    >
                      {c}
                    </motion.span>
                  ))}
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                  {role.split(" ").map((word, index) => {
                    return (
                      <motion.span
                        style={{
                          display: "inline-block",
                          marginRight: " 0.25em",
                          whiteSpace: " nowrap",
                        }}
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                          delayChildren: index * 0.25,
                          staggerChildren: 0.05,
                        }}
                      >
                        {word.split("").map((character, index) => {
                          return (
                            <motion.span
                              style={{
                                display: "inline-block",
                                marginRight: "-0.05em",
                              }}
                              aria-hidden="true"
                              key={index}
                              variants={characterAnimation}
                            >
                              {character}
                            </motion.span>
                          );
                        })}
                      </motion.span>
                    );
                  })}
                </h3>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300">
                  <a
                    className="hover:text-blue-500  "
                    href="https://twitter.com/bishopsirhchris"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    className="hover:text-blue-500 "
                    href="https://www.linkedin.com/in/ambassador-chris-ehigimetor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    className="hover:text-black dark:hover:text-white"
                    href="https://github.com/kathalysth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-md text-justify py-5 leading-8 text-gray-800 w-full dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                  {` A highly motivated and dedicated software developer with experience in Node.js, React.js, JavaScript, Java, and C#. Possesses strong problem-solving skills and a passion for coding. A quick learner with a strong drive to constantly improve and expand upon existing skills and knowledge. Demonstrates expertise in developing and maintaining high-quality applications, ensuring they meet project requirements and customer expectations. A team player with excellent communication skills, capable of working collaboratively with cross-functional teams to deliver successful projects on time and within budget. Overall, an exceptional software developer who is dedicated to delivering top-notch solutions and continuously improving my craft.`}
                </p>
                <a
                  href="#letsTalk"
                  className="bg-teal-500 p-4 text-3xl text-white hover:opacity-90"
                >
                  Lets Talk
                </a>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white font-bold ">
                Skills
              </h3>
            </div>
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
                <p className="text-gray-900 dark:text-gray-200 py-1">C#</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Java</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Python</p>
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
                <p className="text-gray-900 dark:text-gray-200 py-1">React</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">
                  Spring Boot
                </p>
                <p className="text-gray-900 dark:text-gray-200 py-1">.Net</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Vue</p>
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
                <p className="text-gray-900 dark:text-gray-200 py-1">Linux</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Scrum</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Git</p>
                <p className="text-gray-900 dark:text-gray-200 py-1">Docker</p>
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
                <div className="w-full md:w-2/5 h-80 flex justify-center">
                  <Image src={chatSvg} className="w-full" alt="chat" />
                </div>
                <form
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
