import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  NotfoundPageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ringga Revanka",
  logo: "https://avatars.githubusercontent.com/u/99320495",
  email: "contact.ringgarevanka@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/ringgarevanka",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:contact.ringgarevanka@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ringga Revanka",
    description:
      "I'm Ringga Revanka, a passionate 16-year-old tech enthusiast and aspiring full-stack developer. Interested in UI/UX, cybersecurity, gaming, anime, music, and photography.",
    image: identity.logo,
  },
  role: "Student, Tech Enthusiast, Gamer, Audiophile & Developer",
  description:
    "I'm Ringga Revanka, a passionate 16-year-old tech enthusiast and aspiring full-stack developer. Interested in UI/UX, cybersecurity, gaming, anime, music, and photography.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ringga Revanka",
    description:
      "I'm Ringga Revanka, a passionate 16-year-old tech enthusiast and aspiring full-stack developer. Interested in UI/UX, cybersecurity, gaming, anime, music, and photography.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
Hi, my name is **Ringga Revanka**, and you can call me **Ringga**. I am an 16-year-old vocational high school student from [**Indonesia**](https://www.google.com/search?q=Indonesia), born on March 11, 2008.<br>I have a strong interest in technology and creative endeavors. My coding abilities encompass HTML, CSS, and a moderate level of proficiency with frameworks such as Vue.Js and Astro.Js. My goal is to become a full-stack developer, and I am also intrigued by user interface/user experience design and cybersecurity.<br>In my leisure time, I enjoy immersing myself in the world of gaming, with a particular fondness for open-world, RPG, FPS, anime, sandbox, and gacha genres. I'm also an avid anime and film enthusiast, music lover (especially acoustic, j-pop, anime soundtracks, and edm), and photography enthusiast, utilizing tools like adobe photoshop and snapseed for digital photography and editing.<br>You can locate me on the internet under the username *@ringgarevanka*.
`, // Markdown is supported
    image_l: {
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "Left Picture",
    },
    image_r: {
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Solo Developer",
        company: {
          name: "Freelance",
          image: "https://avatars.githubusercontent.com/u/99320495",
          url: "https://github.com/ringgarevanka",
        },
        date: "2021 - Present",
      },
      {
        title: "Solo Developer",
        company: {
          name: "Freelance",
          image: "https://avatars.githubusercontent.com/u/99320495",
          url: "https://github.com/ringgarevanka",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ringga Revanka",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Personal Site (This site)",
      description: "Simple Personal Site Made With Astro",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      year: "2024",
      url: "/",
    },
    {
      title: "Link(s)",
      description: "Link Page created with HTML, CSS, and JavaScript.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      year: "2024",
      url: "https://github.com/ringgarevanka/Link",
    },
    {
      title: "Project",
      description: "Project Description",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      year: "2024",
      url: "#",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Ringga Revanka",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
