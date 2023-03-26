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
      liveDemo: "https://telecomniue.thedevguys.co.nz/",
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
  ];

  return mockProjects;
}
