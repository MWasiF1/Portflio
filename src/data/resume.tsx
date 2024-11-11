import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "M.Wasif",
  initials: "MW",
  url: "https://github.com/MWasiF1",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "#SoftwareEngineer I love building things and helping people. Very active in my professional journey.",
  summary:
   "Software Engineer with a focus on front-end and back-end development. I currently work as an Associate Software Engineer at PostEx. I have strong experience in frameworks such as Angular, React, and Tailwind CSS, as well as backend technologies like Java, Spring Boot, and MySQL. My projects include a mobile payment app, a merchant portal, and a contact management system, highlighting my ability to build full-stack, scalable applications with modern UI/UX design.",
  avatarUrl: "/img.jpeg",
  skills: [
    "React",
    "React Native",
    "Angular",
    "Spring Boot",
    "Next.js",
    "Git",
    "My SQL",
    "MongoDB",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mianwasif.001@gmail.com",
    tel: "+923332667474",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MWasiF1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/muhammad-wasif001",
        icon: Icons.linkedin,

        navbar: true,
      },
   email: {
    name: "Send Email",
    url: "mailto:mianwasif.001@gmail.com",
    icon: Icons.email,
    navbar: false,
},

    },
  },

  work: [
    {
      company: "PostEx",
      href: "https://postex.pk/",
      badges: [],
      location: "Onsite",
      title: "Associate Software Engineer",
      logoUrl: "/postex.jpg",
      start: "August 2024",
      end: "Present",
      description:
        "As an Associate Software Engineer, I focus on updating the merchant portal to Angular v15, enhancing the user interface, and adding new features using Material Angular and Tailwind CSS.",
    },
    {
      company: "Digicon Valley",
      badges: [],
      href: "https://www.linkedin.com/company/digicon-valley/posts/?feedView=all",
      location: "Onsite",
      title: "Trainee Python Developer",
      logoUrl: "/digicon_valley_logo.jpg",
      start: "February 2024",
      end: "March 2024",
      description:
        "At Digicon Valley, I completed a one-month bootcamp as a Python Developer Intern, where I gained hands-on experience with back-end development. My responsibilities included writing Python scripts, building APIs, and working on data processing tasks, enhancing both my programming skills and practical understanding of real-world applications.",
    },
    {
      company: "Algorydhem Developers ",
      href: "https://www.linkedin.com/company/algorydhem-developers/",
      badges: [],
      location: "Onsite",
      title: "Trainee Web Developer",
      logoUrl: "/ad.jpg",
      start: "June 2022",
      end: "August 2022",
      description:
        " During my time as a Trainee Frontend Developer, I developed fully responsive projects using React, HTML, CSS, and Bootstrap while mastering key front-end technologies.",
    },
  ],
  education: [
    {
      school: "GC University,Lahore",
      href: "https://www.gcu.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BSCS)",
      logoUrl: "/download.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Aspire College",
      href: "https://aspirecolleges.edu.pk/",
      degree: "F.SC",
      logoUrl: "/asp.png",
      start: "2018",
      end: "2020",
    },

  ],
  projects: [
    {
      title: "YTS Clone",
      href: "https://github.com/MWasiF1/YTS-Clone",
      dates: "2024",
      active: true,
      description:
        "Developed a full-featured YTS clone that serves as a movie streaming and download platform. This project replicates key functionalities of the YTS platform, allowing users to browse, search, and filter movies by genre, rating, and release year. The application integrates a responsive UI and a smooth navigation experience, with high-quality posters, movie details, and trailers. Implemented backend services to manage movie data and user interactions, using efficient APIs to ensure fast loading times and a scalable database to handle user data and movie content. ",
      technologies: [
        "Angular.ts",
        "Typescript",
        "TailwindCSS",
        "Ng Zoro",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/MWasiF1/YTS-Clone",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
   
  ],

} as const;
