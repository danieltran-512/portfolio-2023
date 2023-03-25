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
      subtitle: "Lorem ipsum",
      image:
        "https://i.guim.co.uk/img/media/d7dabe517046732b9d361567301f02a62d110c7a/0_77_5150_3089/master/5150.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9d5c860207e834d4cbe346894fbb1caf",
      description: "Lorem ipsum",
      techUsed: "Lorem ipsum",
      liveDemo: "https://telecomniue.thedevguys.co.nz/",
    },

    {
      title: "Employ Us",
      subtitle: "Lorem ipsum",
      image:
        "https://www.theladders.com/wp-content/uploads/Boss_Supports_dont_jump_Ship-1044x783.jpg",
      description: "Lorem ipsum",
      techUsed: "Lorem ipsum",
      liveDemo: "https://telecomniue.thedevguys.co.nz/",
    },

    {
      title: "1st call",
      subtitle: "Lorem ipsum",
      image:
        "https://www.cms.1stcall.co.nz/wp-content/uploads/2022/12/DSC_2561-scaled.jpg",
      description: "Lorem ipsum",
      techUsed: "Lorem ipsum",
      liveDemo: "https://www.1stcall.co.nz/",
    },
  ];

  return mockProjects;
}
