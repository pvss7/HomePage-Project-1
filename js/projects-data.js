// Shared project data used by both the homepage honeycomb grid
// and the full projects page. Keeping it in one module means both
// pages always stay in sync.

export const projects = [
  {
    id: "rushb",
    title: "RUSH-B",
    tag: "MySQL",
    thumb: "./images/project-esports.svg",
    alt: "Blueprint-style icon of a trophy representing an e-sports tournament manager",
    description:
      "An e-sports tournament manager for CS2 matches. Designed a MySQL schema covering teams, players, schedules, outcomes, overtime tracking, and match stats, then built functions and stored procedures powering interactive visual reports for planning and decisions.",
    stack: ["MySQL", "Python", "Flask", "Bootstrap"],
    repo: "https://github.com/varshithpothula/rush-b",
    demo: "",
  },
  {
    id: "noticeboard",
    title: "CSE Noticeboard",
    tag: "MongoDB",
    thumb: "./images/project-noticeboard.svg",
    alt: "Blueprint-style icon of a bulletin board representing a department noticeboard app",
    description:
      "A department noticeboard app built to streamline real-time distribution of announcements within the CSE community. Structured a MongoDB Atlas database to manage and serve notices efficiently.",
    stack: ["MongoDB Atlas", "React Native", "Node.js", "Express"],
    repo: "https://github.com/varshithpothula/cse-noticeboard",
    demo: "",
  },
  {
    id: "attendance",
    title: "Mobile Attendance System",
    tag: "React Native",
    thumb: "./images/project-attendance.svg",
    alt: "Blueprint-style icon of a location pin representing a GPS-based attendance system",
    description:
      "A GPS and face-recognition based attendance system for organizations. Modeled and queried a MongoDB Atlas database to store and verify records, ensuring accurate, duplicate-free tracking of physical presence.",
    stack: ["MongoDB Atlas", "React Native", "Node.js", "Express", "Postman"],
    repo: "https://github.com/varshithpothula/mobile-attendance",
    demo: "",
  },
];
