import Head from "next/head";
import Image from "next/image";
const Projects = ({ project }) => {
  return (
    <div className="flex-1 cursor-pointer relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
      <Image
        className="rounded-lg object-cover max-w-xs"
        width={"100%"}
        height={"100%"}
        alt={`Photo of ${project.title}`}
        layout="responsive"
        src={project.background}
      />
      <div class="rounded-lg p-2 text-center text-white absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-teal-500">
        <h3>{project.title}</h3>
        <p className="pb-4">{project.stack.join(" ")}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Projects;
