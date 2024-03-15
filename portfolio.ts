import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Kholid Anas A.",
  title: "Hi all, I'm Kholid Anas Amrulloh",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Laravel, Lumen, Java, AngularJs, ReactJs, ExpressJs, Symfony Framework and VueJs. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "kholidanas27",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:amrulloh30@gmail.com",
  linkedin: "https://www.linkedin.com/in/kholidanas/",
  github: "https://github.com/kholidanas27",
  instagram: "https://www.instagram.com/kholidanas_",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO BE RICH",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Laravel Framework"),
        emoji("⚡ Building RESTful APIs in Express Js Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AngularJs",
          iconifyTag: "vscode-icons:file-type-ng-component-ts",
        },
        {
          skillName: "Talwind CSS",
          iconifyTag: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "Symfony",
          iconifyTag: "vscode-icons:file-type-light-symfony",
        },
        {
          skillName: "Codeigniter",
          iconifyTag: "logos:codeigniter",
        },
        {
          skillName: "VueJs",
          iconifyTag: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "MySQL",
          iconifyTag: "vscode-icons:file-type-mysql",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "vscode-icons:file-type-pgsql",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab CI CD",
          iconifyTag: "vscode-icons:file-type-gitlab",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "87", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Amikom Yogyakarta",
    subHeader: "Associate Degree of Informatics Engineering",
    duration: "September 2018 - Juli 2021",
    desc: "",
    grade: "3.67 / 4.0",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "PT Biro Klasifikasi Indonesia",
    companyLogo: "/img/icons/common/bki.jpg",
    date: "May 2024 - Present",
    desc: "Comming Soon :)",
  },
  {
    role: "Full Stack Developer",
    company: "PT Qtasnim Digital Teknologi",
    companyLogo: "/img/icons/common/qtasnim.jpeg",
    date: "Sep 2021 - April 2024",
    desc: "Create internal applications for BUMN and Muhammadiyah, create APIs for web and mobile application needs, API integration and slicing design from Figma, wrote front-end code, back-end code with 5+ frameworks, help analyze features according to client needs, building reusuable code and component, ceveloped and maintained 20+ REST APIs writing, documentation using Scribe with Laravel, create templating service with phpoffice/phpword",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Nakama Code",
    companyLogo: "/img/icons/common/nakama_code.png",
    date: "Dec 2020 - Present",
    desc: "Crafted, maintain and bug fixing notification apps, Umrah an Hajj Travel App, Top Up Game App, styling and creating responsive pages applications, create a campus organization profile website. Implementation Meta Whatsapp Message, github action or gitlab ci/cd for automatic deployment.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "E-Notification",
    desc: "E-Notification is an application from PT Kreasindo Bandung for Visa and Passport Renewal reminder. It has features of create task with dynamic form, scheduler cronjob for send email, arsip, managing client and etc. Stack : React Js, Laravel Lumen, Redux Saga, MySql, Cronjob Cpanel.",
    github: "https://github.com/kholidanas27/fe-notification.git",
    link: "https://e-notification.strawhatdev.site/",
  },
  {
    name: "Remote Survey",
    desc: "Remote survey is an application from PT BKI (Biro Klasifikasi Indonesia) for all Vessels Classification. Creating order for checking vessel, gallery for evidence, video Conference for live checking, and etc. React Js, Laravel Lumen, Redux Saga, Postgresql, Jitsi Meet, LeavletJs",
    link: "https://gibeo.io/",
  },
  {
    name: "MyBKI",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "RICO",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "RDS (Rail Document System)",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "SIPPMU (Sistem Informasi Pelayanan PDM Muhammadiyah)",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "COMMU (Community of Muhammadiyah)",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "HRMS BKI (Human Resource Management Sytem)",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "Maghfirah Travel",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://maghfirah.com/",
  },
  {
    name: "MYPRO",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "http://dev.myproindonesia.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Kholid is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Kholid has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Kholid is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Kholid for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Kholid Anas Amrulloh",
  description: greetings.description,
  author: "Kholid Anas Amrulloh",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Kholid",
    "Kholid Anas Amrulloh",
    "@kholidanas_",
    "kholidanas27",
    "Portfolio",
    "Kholid Portfolio ",
    "Kholid Anas Amrulloh Portfolio",
  ],
};
