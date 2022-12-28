import sims from "./public/student_dashboard_desktop.PNG";
import bloodBank from "./public/bloodbank_home.PNG";
import afm from "./public/afm_home.PNG";

export const projects = [
  {
    title: "APPLYFORME",
    background: afm,
    stack: ["React", "Java", "MySQL"],
    description: `A web application that automates the process of Job applications,
    Candidates fill their information and type of jobs they are open to, and the system automatically applies for jobs on their behalf.
    `,
  },
  {
    title: "Blood Bank Management System",
    background: bloodBank,
    stack: ["React", "Node.js", "MongoDB"],
    description: `A web application were hospitals are
paired with potential blood donors nearby, who can book appointments to donate blood. Hospitals can also request Blood from other nearby hospitals.`,
  },
  {
    title: "Student Information Management System (PWA)",
    background: sims,
    stack: ["React", "Node.js", "MongoDB"],
    description: `This software automates manual course registration and students' exam grading.
     This software is used by the department of Computer Engineering University of Benin to perform students’ course registration and exam grading.`,
  },
];
