import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Hamzan Wahyudi",
  DESCRIPTION: "Hamzan Wahyudi's personal website.",
  AUTHOR: "Hamzan Wahyudi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "hamzankechil@gmail.com",
    HREF: "mailto:hamzankechil@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "void-panda",
    HREF: "https://github.com/void-panda"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "hamzan-wahyudi",
    HREF: "https://www.linkedin.com/in/hamzan-wahyudi/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "hamzandev",
    HREF: "https://twitter.com/hamzandev",
  },
]

// SKILLS
export const stack = {
  languages: [
    {
      text: "Javascript",
      icon: "simple-icons:javascript",
      href: "https://www.javascript.com"
    },
    {
      text: "Typescript",
      icon: "simple-icons:typescript",
      href: "https://www.typescriptlang.org"
    },
    {
      text: "Golang",
      icon: "simple-icons:go",
      href: "https://golang.org"
    },
    {
      text: "PHP",
      icon: "simple-icons:php",
      href: "https://www.php.net"
    },
  ],
  libraries: [
    {
      text: "ReactJS",
      icon: "simple-icons:react",
      href: "https://reactjs.org"
    },
    {
      text: "VueJS",
      icon: "simple-icons:vuedotjs",
      href: "https://vuejs.org"
    },
    {
      text: "Tailwind",
      icon: "simple-icons:tailwindcss",
      href: "https://tailwindcss.com"
    },
    {
      text: "Bootstrap",
      icon: "simple-icons:bootstrap",
      href: "https://getbootstrap.com"
    }
  ],
  frameworks: [
    {
      text: "Laravel",
      icon: "simple-icons:laravel",
      href: "https://laravel.com"
    },
    {
      text: "Flutter",
      icon: "simple-icons:flutter",
      href: "https://flutter.dev"
    },
    {
      text: "Astro",
      icon: "simple-icons:astro",
      href: "https://astro.build"
    },
    {
      text: "Svelte",
      icon: "simple-icons:svelte",
      href: "https://svelte.dev"
    },
    {
      text: "NextJS",
      icon: "simple-icons:nextdotjs",
      href: "https://nextjs.org"
    },
    {
      text: "NuxtJS",
      icon: "simple-icons:nuxtdotjs",
      href: "https://nuxtjs.org"
    },
  ],
  databases: [
    {
      text: "MySQL",
      icon: "simple-icons:mysql",
      href: "https://www.mysql.com"
    },
    {
      text: "SQLite",
      icon: "simple-icons:sqlite",
      href: "https://www.sqlite.org"
    },
    {
      text: "PostgreSQL",
      icon: "simple-icons:postgresql",
      href: "https://www.postgresql.org"
    }
  ],
  tools: [
    {
      text: "Nginx",
      icon: "simple-icons:nginx",
      href: "https://nginx.org"
    },
    {
      text: "Redis",
      icon: "simple-icons:redis",
      href: "https://redis.io"
    },
    {
      text: "Docker",
      icon: "simple-icons:docker",
      href: "https://www.docker.com"
    },
    {
      text: "Git",
      icon: "simple-icons:git",
      href: "https://git-scm.com"
    },
    {
      text: "VSCode",
      icon: "simple-icons:visualstudiocode",
      href: "https://code.visualstudio.com"
    },
    {
      text: "Postman",
      icon: "simple-icons:postman",
      href: "https://www.postman.com"
    }
  ],
  os: [
    {
      text: "Linux",
      icon: "simple-icons:linux",
      href: "https://www.linux.org"
    },
    {
      text: "Windows",
      icon: "simple-icons:windows",
      href: "https://www.microsoft.com/en-us/windows"
    }
  ]
}

