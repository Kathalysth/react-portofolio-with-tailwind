import Head from "next/head";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import frameworks from "../public/frameworks.svg";
import versionControl from "../public/version_control.svg";
import Image from "next/image";
import web1 from "../public/student_dashboard_desktop.PNG";
import web2 from "../public/bloodbank_home.PNG";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import portrait from "../public/my-portrait.jpg"
import programming from "../public/undraw_programming_re_kg9v.svg"

const MySwal = withReactContent(Swal)

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nameValue, setName] = useState('');
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageValue, setMessage] = useState("");

  function handleFormSubmit() {
      setIsLoading(true)
      fetch("https://formsubmit.co/ajax/ambyehigimetor@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          email: email,
          subject: 'Reached out from Porfolio',
          message: messageValue,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          MySwal.fire
          (
            "Thank You!",
            "I appreciate you taking the time to reach out!",
            "success"
          );
          setEmail("")
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
        <meta name="portfolio" content="Chris Ehigimetor Portfolio created with nextjs" />
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
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Chris Ehigimetor
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Javascript Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
               A javascript Developer that specializes on front-end frameworks such as React, Vue, NuxtJS and NextJS. I have a passion for Design Systems, Web Accessibility, Open Source Contribution, and System Integration. To grow I focus on contributing to open source projects.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/bishopsirhchris" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/ambassador-chris-ehigimetor" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://github.com/kathalysth" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={portrait} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-700 flex-1">
              <Image src={programming} width={150} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                Languages
              </h3>
              <p className="text-gray-900 dark:text-gray-200 py-1">Javascript</p>
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
              <p className="text-gray-900 dark:text-gray-200 py-1">SpringBoot</p>
              <p className="text-gray-900 dark:text-gray-200 py-1">.Net</p>
              <p className="text-gray-900 dark:text-gray-200 py-1">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
              <Image src={versionControl} width={150} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">CI/CD</h3>
              <p className="text-gray-900 dark:text-gray-200 py-1">Linux</p>
              <p className="text-gray-900 dark:text-gray-200 py-1">Scrum</p>
              <p className="text-gray-900 dark:text-gray-200 py-1">Git</p>
              <p className="text-gray-900 dark:text-gray-200 py-1">Dccker</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Lets Talk</h3>
            <p className="text-teal-500 py-4">Drop a message!</p>
            <form onSubmit={(e)=>{
              e.preventDefault()
              handleFormSubmit()
            }}>
              <div className="w-6/6 flex flex-col mb-4">
                <label className="mb-2 text-gray dark:text-white" htmlFor="name">Name</label>
                <input required title="Name"  name='name' value={nameValue}  onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"/>
              </div>
              <div className="w-6/6 flex flex-col mb-4">
                <label className="mb-2 text-gray dark:text-white" htmlFor="email">Email</label>
                <input required title="Email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="web@example.com" className="p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"/>
              </div>
              <div className="w-6/6 flex flex-col mb-4">
                <label className="mb-2 text-gray dark:text-white" htmlFor="message">Message</label>
                <textarea name="message" value={messageValue} onChange={(e)=> setMessage(e.target.value)} required rows="5" placeholder="Type a message..." className="resize-none p-2 text-gray border-solid border-gray-600 border-2 rounded bg-white dark:text-white dark:bg-gray-700 focus:outline outline-teal-500 outline-2 focus:border-teal-500"/>
              </div>
              <div className="w-6/6">
                <button className="bg-teal-500 w-100 block text-white p-2" disabled={isLoading ? true : false}>{isLoading ? "...Please Wait" : "Submit"}</button>
              </div>

            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
