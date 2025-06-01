const skills = [
  //Frontend
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "TypeScript", level: 50, category: "Frontend" },
  { name: "Tailwind CSS", level: 40, category: "Frontend" },
  { name: "Next.js", level: 30, category: "Frontend" },

  //Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 60, category: "Backend" },
  { name: "PostgreSQL", level: 50, category: "Backend" },
  { name: "GraphQL", level: 40, category: "Backend" },
  { name: "Prisma", level: 30, category: "Backend" },

  //Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "NPM", level: 60, category: "Tools" },
  { name: "Vite", level: 40, category: "Tools" },
  { name: "Figma", level: 30, category: "Tools" },
  { name: "VS Code", level: 30, category: "Tools" },

  //Languages
  { name: "English", level: 40, category: "Languages" },
  { name: "Portuguese", level: 100, category: "Languages" },
  { name: "Spanish", level: 100, category: "Languages" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div>
                <h3 className="text-lg font-semibold">{skills.name}</h3>
                <p className="text-muted-foreground">Level: {skills.level}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
