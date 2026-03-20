export interface Project {
  number: string;
  name: string;
  stack: string;
  badge: string;
  url?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Cockpit — Life Dashboard",
    stack: "React · TypeScript · Vite",
    badge: "Web App",
  },
  {
    number: "02",
    name: "Ethical Hacking Outreach Programme",
    stack: "CyberNorth · Cystel · KS4",
    badge: "Teaching",
  },
  {
    number: "03",
    name: "Summit — Fitness Tracker",
    stack: "React · TypeScript",
    badge: "Web App",
  },
  {
    number: "04",
    name: "Google Calendar MCP Server",
    stack: "TypeScript · Node.js",
    badge: "Tool",
  },
];
