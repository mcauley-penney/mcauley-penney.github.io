import AcademiconsDblp from "~icons/academicons/dblp";
import AcademiconsGoogleScholar from "~icons/academicons/google-scholar";
import IcRoundEmail from "~icons/ic/round-email";
import MdiGithub from "~icons/mdi/github";
import MdiLinkedin from "~icons/mdi/linkedin";
import AcademiconsResearchgate from "~icons/academicons/researchgate";

function getCurrentISODate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1

  return `${year}-${month}`;
}

export const NAV_LINKS = [
  {
    name: "ABOUT",
    link: "#about",
  },
  {
    name: "HISTORY",
    link: "#history",
  },
  {
    name: "ACADEMIA",
    link: "#academia",
  },
];

export const SOCIAL_MEDIA = [
  {
    name: "Email",
    icon: IcRoundEmail,
    link: "mailto:jacobmpenney@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: MdiLinkedin,
    link: "https://www.linkedin.com/in/jacob-m-penney",
  },
  {
    name: "GitHub",
    icon: MdiGithub,
    link: "https://github.com/mcauley-penney",
  },
  {
    name: "Google Scholar",
    icon: AcademiconsGoogleScholar,
    link: "https://scholar.google.com/citations?user=4maC0rUAAAAJ&hl=en&oi=ao",
  },
  {
    name: "ResearchGate",
    icon: AcademiconsResearchgate,
    link: "https://www.researchgate.net/profile/Jacob-Penney-2/research",
  },
  {
    name: "DBLP",
    icon: AcademiconsDblp,
    link: "https://dblp.org/pid/344/0963.html",
  },
];

export const WORK = [
  {
    title: "Graduate Researcher",
    company: "Northern Arizona University",
    location: "Flagstaff, AZ, USA",
    date: ["2023-05", getCurrentISODate()],
    delta: null,
    description: `As a PhD student, I study how Large Language Models impact computer science pedagogy. I published my first first-author paper, a book chapter discussing the requirements that university instructors have for future Large Language Model-based conversational agents that would seek to be used in the classroom, during my first semester. This work won "Best Paper" award at the accepting workshop. Since then, I've been interviewing novice computer science students on their usage of LLM-based chatbots and working with my lab to build one of our own. During this, I'm mentoring one graduate student and managing two undergaduate students.

    I'm also continuing with research I was involved with as an undergraduate, working with Dr. Fabio Santos of Grand Canyon University on using machine learning models to predict skills to solve open issues.

    Through this process, I'm becoming a more independent learner and professional, developing research and technical presentation skills, and honing development skills I built as an undergraduate.
 `,
  },
  {
    title: "Team Lead and Fullstack Developer",
    company: "Lowell Observatory",
    location: "Flagstaff, AZ, USA",
    date: ["2022-08", "2023-05"],
    delta: "9 months",
    description: `During my senior year as a B.S. Applied Computer Science student, I had the opportunity to work with a team of four other peers on a senior capstone project for Dr. Joe Llama at Lowell Observatory. We were tasked with building a web application that allowed astronomers to manage spectrographs and cameras for observations and I volunteered to be our team lead and a fullstack developer. My responsibilities included managing communication with our client and our team's supervisor for the duration of the project and contributing to the frontend, backend, interfaces for the hardware our application would manage, and DevOps tasks like containerization.

    In the end, I contributed almost half of the project's total commits and led our team to completing most of our stretch goals, client acceptance of the product, and receiving the second highest marks from a client in a class with 12 total clients.
    `,
  },
  {
    title: "Undergaduate Researcher",
    company: "Northern Arizona University",
    location: "Flagstaff, AZ, USA",
    date: ["2021-04", "2023-05"],
    delta: "2 years, 1 month",
    description: `During my two years as an undergraduate researcher under Dr. Marco Gerosa at Northern Arizona University, I developed software for a project led by his PhD student, Fabio Santos (now a professor at Grand Canyon University). The tool our team produced uses machine learning to predict the skills needed to successfully resolve open issues on GitHub. From this project, including software I either wrote or contributed to, we produced three publications at significant conferences and journals (see my publications section). Today, I continue to contribute to Dr. Santos' work through development and publications on the tool.
    `,
  },
];

export const EDUCATION = [
  {
    degree: "MSc Computer Science",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ, USA",
    date: ["2023-08", null],
    desc: "Current GPA: 3.6",
  },
  {
    degree: "BS Applied Computer Science",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ, USA",
    date: ["2019-08", "2023-05"],
    desc: "Minor in Cybersecurity"
  },
  {
    degree: "BA Comparative Cultural Studies",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ, USA",
    date: ["2011-08 to 2015-05", "2019-08 to 2023-05"],
    desc: "Emphasis in Religious Studies and minors in Art History and Asian Studies"
  },
];

export const CITES = [
  {
    year: 2024,
    entries: [
      {
        authors: "Penney, J., Pimentel, J.F., Steinmacher, I., Gerosa, M.A.",
        title:
          "Anticipating User Needs: Insights from Design Fiction on Conversational Agents for Computational Thinking",
        venue:
          "7th International Workshop on Chatbot Research (CONVERSATIONS 2023)",
        doi: "https://doi.org/10.1007/978-3-031-54975-5_12",
      },
    ],
  },
  {
    year: 2023,
    entries: [
      {
        authors:
          "Santos, F., Vargovich, J., Trinkenreich, B., Santos, I., Penney, J., Britto, R., Pimentel, J.F., Wiese, I., Steinmacher, I., Sarma, A., Gerosa, M.A.",
        title:
          "Tag that issue: Applying API-domain labels in issue tracking systems",
        venue: "Empirical Software Engineering (EMSE)",
        doi: "https://doi.org/10.1007/s10664-023-10329-4",
      },
      {
        authors:
          "Santos, F., Penney, J., Pimentel, J., Wiese, I., Steinmacher, I., Gerosa, M.A.",
        title:
          "Tell Me Who Are You Talking to and I Will Tell You What Issues Need Your Skills",
        venue:
          "International Conference on Mining Software Repositories (MSR 2023)",
        doi: "https://doi.org/10.1109/MSR59073.2023.00087",
      },
      {
        authors:
          "Vargovich, J., Santos, F., Penney, J., Gerosa, M.A., Steinmacher, I.",
        title:
          "GiveMeLabeledIssues: An Open Source Issue Recommendation System",
        venue:
          "International Conference on Mining Software Repositories (MSR 2023)",
        doi: "https://doi.org/10.1109/MSR59073.2023.00061",
      },
    ],
  },
];

//
//  // Projects
//  export const MY_PHONE = {
//    thumbnail: "meufoneScreenshot.png",
//    links: {
//      demo: "https://meu-fone.vercel.app/",
//      repo: "https://github.com/mthsoliveira7/meuFone/",
//      design: "https://media.tenor.com/CmcVmK0EC0kAAAAC/coming-soon-em-breve.gif",
//    },
//    name: "meuFone",
//    description:
//      "A meuFone é um e-commerce fictício de venda de fones de ouvido, desenvolvido com Next.js e Tailwind CSS. O projeto consiste em três páginas principais: a página inicial, que serve como a porta de entrada do site, apresentando os produtos mais populares ou recentes, o catálogo, que lista todos os produtos disponíveis para venda e a página de detalhes do produto que fornece informações detalhadas sobre um produto específico, incluindo descrição, preço, imagem e avaliações.",
//    tech: {
//      name: ["React", "Next.js", "Tailwind"],
//      colors: [
//        "bg-red-950/40 text-red-500 ring-red-500/20",
//        "bg-sky-950/40 text-sky-400 ring-sky-400/20",
//        "bg-lime-950/40 text-lime-400 ring-lime-400/20",
//      ],
//    },
//  };
//
//  export const GUARDA_NOTAS = {
//    thumbnail: "guardanotasScreenshot.png",
//    links: {
//      demo: "https://guardanotas.pages.dev/",
//      repo: "https://github.com/mthsoliveira7/guardanotas",
//      design: "https://www.figma.com/community/file/1285285784771074425",
//    },
//    name: "GuardaNotas",
//    description:
//      "O GuardaNotas é um aplicativo CRUD que permite aos usuários criar e armazenar notas pequenas ou lembretes diretamente no armazenamento local do navegador. O aplicativo é construído com uma interface de usuário intuitiva e responsiva, estilizada com Tailwind CSS, e serviu também como porta de entrada pro primeiro gerenciador de estado externo que utilizei, o Zustand. Usei também TypeScript pra prevenção de erros e Vite como ferramenta de construção.",
//    tech: {
//      name: ["React", "TypeScript", "Tailwind", "Zustand", "Vite"],
//      colors: [
//        "bg-red-950/40 text-red-500 ring-red-500/20",
//        "bg-sky-950/40 text-sky-400 ring-sky-400/20",
//        "bg-lime-950/40 text-lime-400 ring-lime-400/20",
//        "bg-yellow-950/40 text-yellow-400 ring-yellow-400/20",
//        "bg-purple-950/40 text-purple-500 ring-purple-400/20",
//      ],
//    },
//  };
//
