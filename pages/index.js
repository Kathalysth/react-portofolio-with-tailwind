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
import { useState } from "react";
import frameworks from "../public/frameworks.svg";
import versionControl from "../public/version_control.svg";
import portrait from "../public/my-portrait.jpg";
import programming from "../public/undraw_programming_re_kg9v.svg";
import Projects from "../components/Projects";
import { projects } from "../projects";

const MySwal = withReactContent(Swal);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nameValue, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");

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
          "I appreciate you taking the time to reach out!",
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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Chris Ehigimetor</title>
        <meta
          name="portfolio"
          content="Chris Ehigimetor Portfolio created with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">@kathalysth</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
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
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-6xl">
              Chris Ehigimetor
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer.
            </h3>
            <p className="text-md text-justify py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Software Engineer with experience in React, NodeJs, and
              Vue. I am also experienced in Java and C#. I am passionate about
              problem-solving, and I am very analytical and results-oriented. I
              am also relentless when it comes to achieving results. I grew up
              in Nigeria, and I have always been fascinated by technology and
              how it can be used to solve problems. I decided to become a
              software engineer because I wanted to be able to build solutions
              that make people's lives better. I am currently working on a
              project that is aimed at making the web more accessible for people
              with disabilities. I also work on contributing to open-source
              projects frequently.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                className="hover:bg-teal-500 rounded-full"
                href="https://twitter.com/bishopsirhchris"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className="hover:bg-teal-500 rounded"
                href="https://www.linkedin.com/in/ambassador-chris-ehigimetor"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="hover:bg-teal-500 rounded-full"
                href="https://github.com/kathalysth"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto flex justify-center bg-gradient-to-b from-teal-500 rounded-full w-full h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={portrait} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-bold ">Skills</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-700 flex-1">
              <Image src={programming} width={150} height={150} />
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
              <Image src={frameworks} width={150} height={150} />
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
              <Image src={versionControl} width={150} height={150} />
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
              <Projects key={`${project.title}-${index}`} project={project} />
            ))}
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl font-bold py-1 dark:text-white ">
              Lets Talk
            </h3>
            <p className="text-teal-500 py-4">Drop a message!</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
              }}
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
        </section>
      </main>
    </div>
  );
}
