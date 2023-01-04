import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Projects = ({ project, number }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="w-full flex flex-wrap  gap-2 items-center cursor-pointer  relative overflow-hidden bg-no-repeat bg-cover min-h-[70vh] md:min-h-screen"
    >
      {number % 2 !== 0 ? (
        <div className="w-full md:w-4/12 order-2 md:order-1 dark:text-white">
          <h3 className="font-bold text-4xl">{project.title}</h3>
          <p className="pb-4 text-teal-600">{project.stack.join(" ")}</p>
          <p>{project.description}</p>
        </div>
      ) : null}
      <img
        className="w-full order-1 md:order-1 md:w-7/12"
        width={"100%"}
        height={"100%"}
        alt={`Photo of ${project.title}`}
        layout="responsive"
        src={project.background.src}
      />
      {number % 2 === 0 ? (
        <div className="w-full md:w-4/12 order-2 md:order-1 dark:text-white">
          <h3 className="font-bold text-4xl">{project.title}</h3>
          <p className="pb-4 text-teal-600">{project.stack.join(" ")}</p>
          <p>{project.description}</p>
        </div>
      ) : null}
      {/* <div class="rounded-lg p-2 text-center text-white absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-teal-500">
        <h3>{project.title}</h3>
        <p className="pb-4">{project.stack.join(" ")}</p>
        <p>{project.description}</p>
      </div> */}
    </motion.div>
  );
};

export default Projects;
