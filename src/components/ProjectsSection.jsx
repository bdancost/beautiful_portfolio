import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pet Shop Dev - Landing Page",
    description:
      "Welcome to the Pet Shop Dev Landing Page repository! This project was developed using Next.js, React, Tailwind CSS, and features animations with AOS (Animate On Scroll).",
    image: "/projects/project01.png",
    tags: ["Next.js", "React", "Tailwind CSS", "AOS"],
    demoUrl: "https://pet-dev-one.vercel.app/",
    githubUrl: "https://github.com/bdancost/pet_dev",
  },
  {
    id: 2,
    title: "W'Food – Modern Restaurant",
    description:
      "Welcome to W'Food, a modern and responsive website for restaurants, developed with top technologies to ensure an intuitive and elegant user experience.",
    image: "/projects/project02.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://wfood-self.vercel.app/",
    githubUrl: "https://github.com/bdancost/wfood",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "This is an e-commerce project developed with React and Vite, using TailwindCSS and DaisyUI for styling. The project is modular and follows a well-organized structure to facilitate maintenance and scalability.",
    image: "/projects/project03.png",
    tags: ["React", "Tailwind CSS", "Vite", "DaisyUI"],
    demoUrl: "https://ecommerce-app-ten-lilac.vercel.app/",
    githubUrl: "https://github.com/bdancost/ecommerce_app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and yser experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary trasition-color duration-300"
                    >
                      <ExternalLink size={25} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary trasition-color duration-300"
                    >
                      <Github size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
