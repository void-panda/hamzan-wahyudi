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
      icon: "javascript", 
      href: "https://www.javascript.com" 
    },
    { 
      text: "Typescript", 
      icon: "typescript", 
      href: "https://www.typescriptlang.org" 
    },
    { 
      text: "Golang", 
      icon: "go", 
      href: "https://golang.org" 
    },
    { 
      text: "PHP", 
      icon: "php", 
      href: "https://www.php.net" 
    },
  ],
  libraries: [
    { 
      text: "ReactJS", 
      icon: "react", 
      href: "https://reactjs.org" 
    },
    { 
      text: "VueJS", 
      icon: "vue", 
      href: "https://vuejs.org" 
    },
    { 
      text: "Tailwind", 
      icon: "tailwind", 
      href: "https://tailwindcss.com" 
    },
    { 
      text: "Bootstrap", 
      icon: "bootstrap", 
      href: "https://getbootstrap.com" 
    }
  ],
  frameworks: [
    { 
      text: "Laravel", 
      icon: "laravel", 
      href: "https://laravel.com" 
    },
    { 
      text: "Flutter", 
      icon: "flutter", 
      href: "https://flutter.dev" 
    },
    { 
      text: "Astro", 
      icon: "astro", 
      href: "https://astro.build" 
    },
    { 
      text: "Svelte", 
      icon: "svelte", 
      href: "https://svelte.dev" 
    },
    { 
      text: "NextJS", 
      icon: "nextjs", 
      href: "https://nextjs.org" 
    },
    { 
      text: "NuxtJS", 
      icon: "nuxtjs", 
      href: "https://nuxtjs.org" 
    },
  ],
  databases: [
    { 
      text: "MySQL", 
      icon: "mysql", 
      href: "https://www.mysql.com" 
    },
    { 
      text: "SQLite", 
      icon: "sqlite", 
      href: "https://www.sqlite.org" 
    },
    { 
      text: "PostgreSQL", 
      icon: "postgres", 
      href: "https://www.postgresql.org" 
    }
  ],
  tools: [
    { 
      text: "Nginx", 
      icon: "nginx", 
      href: "https://nginx.org" 
    },
    { 
      text: "Redis", 
      icon: "redis", 
      href: "https://redis.io" 
    },
    { 
      text: "Docker", 
      icon: "docker", 
      href: "https://www.docker.com" 
    },
    { 
      text: "Git", 
      icon: "git", 
      href: "https://git-scm.com" 
    },
    { 
      text: "VSCode", 
      icon: "vscode", 
      href: "https://code.visualstudio.com" 
    },
    { 
      text: "Postman", 
      icon: "postman", 
      href: "https://www.postman.com" 
    }
  ],
  os: [
    { 
      text: "Linux", 
      icon: "linux", 
      href: "https://www.linux.org" 
    },
    { 
      text: "Windows", 
      icon: "windows", 
      href: "https://www.microsoft.com/en-us/windows" 
    }
  ]
}

