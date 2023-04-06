export interface ProjectModel {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  techUsed: string;
  github?: string;
  liveDemo: string;
}

export default function getProjects() {
  const mockProjects: ProjectModel[] = [
    {
      title: "Telecom Niue",
      subtitle:
        "Website for Telecom Niue, a telecommunication service provider based on the island of Niue",
      image:
        "https://i.guim.co.uk/img/media/d7dabe517046732b9d361567301f02a62d110c7a/0_77_5150_3089/master/5150.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9d5c860207e834d4cbe346894fbb1caf",
      description:
        "Telcom Niue is an e-commerce website in Niue that advertises phone plans and devices. It's built using Next.js and a headless WordPress CMS, with WooCommerce and authentication system integrations for smooth, secure transactions.",
      techUsed: "Next.js, WordPress, WooCommerce, Material UI, Verifone",
      liveDemo: "https://telecomniue.com/",
    },

    {
      title: "Employ Us",
      subtitle:
        "EmployUs is a hiring app that lets employers find employees and jobseekers search for jobs with an authentication system, subscriptions, and profiles.",
      image:
        "https://www.theladders.com/wp-content/uploads/Boss_Supports_dont_jump_Ship-1044x783.jpg",
      description:
        "EmployUs is a startup that simplifies hiring by providing an app with an authentication system for employers and jobseekers. Employers can find employees and pay for a subscription, while jobseekers create profiles and search for jobs.",
      techUsed:
        "Next.js, WordPress (as a database and authentication), WooCommerce, Material UI",
      liveDemo: "https://telecomniue.thedevguys.co.nz/",
    },

    {
      title: "1st call",
      subtitle:
        "1st Call is a prominent recruitment agency that helps connect job seekers with potential employers across New Zealand. ",
      image:
        "https://www.cms.1stcall.co.nz/wp-content/uploads/2022/12/DSC_2561-scaled.jpg",
      description:
        "I worked on a project for 1st Call, a recruitment agency that partners with employers to help job seekers find employment easily. This was my first experience using Next.js and a headless WordPress CMS, but with the help of my mentor, I delivered a high-quality website that met the client's requirements.",
      techUsed: "Next.js, WordPress, Material UI",
      liveDemo: "https://www.1stcall.co.nz/",
    },

    {
      title: "enlight",
      subtitle:
        "Web application that allows the government of Nepal to improve their teacher profiling system",
      image:
        "https://images.techhive.com/images/article/2016/11/workforce-management_and_hiring_trends_2017-100695528-large.jpg?auto=webp&quality=85,70",
      description:
        "This is a Research & Development project from my final year of university for a company called CAITO. We implemented SCRUM and Agile methodologies to develop a web application that allows Nepal to conduct their teacher profiling system easier by asking the teachers to fill out the forms provided by the officers. I was the Scrum master of the team of five.",
      techUsed: "React, Firebase",
      github: "https://github.com/RnD-2022-CAITO",
      liveDemo: "https://caito-dev.web.app/",
    },

    {
      title: "naur",
      subtitle: "Simple static website for a fictional perfume company",
      image: "https://i.imgur.com/CEeS9rQ.jpeg",
      description:
        "This was my very first project experimenting HTML and CSS. I want to explore what can we do to a website with just HTML and CSS. In this project, I also experimented different compositions and layouts to see what works best.",
      techUsed: "React, Firebase",
      github: "https://github.com/danieltran-512/naur",
      liveDemo: "https://danieltran-512.github.io/naur/",
    },
  ];

  return mockProjects;
}
