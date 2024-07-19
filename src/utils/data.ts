import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import {
	SiExpress,
	SiMongodb,
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiSpring,
	SiMicrosoftsqlserver,
	SiPostgresql,
	SiHibernate,
	SiBootstrap,
	SiVaadin,
	SiJira,
	SiJenkins,
	SiGit,
	SiApachemaven,
	SiGradle,
	SiGithubactions,
	SiGithub,
	SiBitbucket,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

export const projects = [
	{
		name: "OCP",
		image: "projects/OCP.png",
		details:
			"This project provides a robust web-based platform for companies to host their own career pages, allowing users to browse job listings and apply directly from the website.",
		stack: ["React 18", "Node.js", "Express", "MongoDB (Local, Atlas)"],
		demoLink: "#",
		repoLink: "https://github.com/IvanoskiHarmonia/open-career-portal",
	},
	{
		name: "StudySprint",
		image: "projects/StudySprint.png",
		details: "This project does amazing things using modern web technologies.",
		stack: ["React", "Node.js", "Express", "MongoDB"],
		demoLink: "#",
		repoLink: "https://github.com/IvanoskiHarmonia/quiz-service",
	},
	{
		name: "3os",
		image: "projects/3os.png",
		details: "Academic Growth Through Digital Evolution",
		stack: ["Web Flow"],
		demoLink: "https://www.3os.com/",
		repoLink: "https://github.com/Software-Engineering-1-Group-13/Bookstore-API",
	},
	{
		name: "Adorned",
		image: "",
		details:
			"Bored of looking through your clothes to find what to wear tonight? look no more, install this app, upload your clothes and make combinations as easy as a simple tab on the pictures.",
		stack: ["Node.js", "Express", "PostgreSQL"],
		demoLink: "#",
		repoLink: "https://github.com/IvanoskiHarmonia/adorned",
	},
];

export const techStack = [
	{ name: "Java", icon: FaJava },
	{ name: "Spring", icon: SiSpring },
	{ name: "Python", icon: FaPython },
	{ name: "React", icon: FaReact },
	{ name: "Node.js", icon: FaNodeJs },
	{ name: "Express", icon: SiExpress },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "HTML", icon: SiHtml5 },
	{ name: "CSS", icon: SiCss3 },
	{ name: "Bootstrap", icon: SiBootstrap },
	{ name: "SQL", icon: SiMicrosoftsqlserver },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "Hibernate", icon: SiHibernate },
	{ name: "H2", icon: FaDatabase },
	{ name: "Vaadin", icon: SiVaadin },
	{ name: "RESTful APIs", icon: AiOutlineApi },
	{ name: "Jira", icon: SiJira },
	{ name: "Jenkins", icon: SiJenkins },
	{ name: "Git", icon: SiGit },
	{ name: "GitHub", icon: SiGithub },
	{ name: "BitBucket", icon: SiBitbucket },
	{ name: "GitHub Actions", icon: SiGithubactions },
	{ name: "Maven", icon: SiApachemaven },
	{ name: "Gradle", icon: SiGradle },

	// Add more tech stack items as needed
];
