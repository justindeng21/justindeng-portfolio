export type AboutData = {
    label: string;
    title: string;
    description: string;
    resumeLink: {
        text: string;
        href: string;
    };
    technologies: Array<string>
};

export const aboutData: AboutData = {
    label: "03 — About",
    title: "Technical support meets software engineering.",
    description:
        "I have a background in Computer Science and professional experience supporting enterprise SaaS products. My work sits between customers, software, and engineering: understanding what is going wrong, figuring out why, and finding a practical solution.",
    resumeLink: {
        text: "View my resume →",
        href: "/resume.pdf",
    },
    technologies: ["Languages: TypeScript · JavaScript · C#",
        "Frontend: React · HTML · CSS · Vite",
        "Backend: .NET · REST APIs",
        "Databases: MySQL · Redis",
        "Cloud: AWS · EC2",
        "Tools: Git · GitHub · Docker · Nginx",]
};