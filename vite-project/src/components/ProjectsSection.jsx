import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RestaurantLens - AI-Powered Restaurant Reviews Analyzer",
    description: "A local LLM-powered web app that analyzes customer reviews from CSV files and generates structured summaries, insights, and business recommendations. It uses LangChain, Ollama, and Chroma vector search in a RAG (Retrieval-Augmented Generation) pipeline, making it a powerful tool for understanding customer sentiment, service quality, and actionable improvements.",
  image: "/projects/project1.png",
    tags: ["Python", "LangChain", "Ollama", "Chroma", "Streamlit", "RAG"],
    githubUrl: "https://github.com/AsmiiGaurav/AI-Powered-Customer-Feedback-Analyzer/tree/main",
  },
  {
    id: 2,
    title: "Digital Village Project - Smarter Irrigation through data",
    description: "As a Remote Sensing Intern with Tel Aviv University, Israel, I’m contributing to a large-scale project using satellite data and analytics to optimize irrigation in Punjab. By analyzing evapotranspiration across a sample from over a 1000 plots, we're identifying sustainable farming practices that reduce water waste.",
  image: "/projects/project2.png",
    tags: ["Python", "Remote Sensing", "Data Analysis", "GIS"],
    githubUrl: "https://github.com/AsmiiGaurav/Digital-Village",
  },
  {
    id: 3,
    title: "Detection and Localization of Tampering in Medical Images",
    description: "A dual-pipeline deep learning system to detect and localize tampering in medical images, focused on CT scans and mammograms. The project combines classical image forensics with modern CNN architectures to deliver both binary tamper classification and pixel-level localization with interpretable visual outputs.",
  image: "/projects/project3.png",
    tags: ["Python", "PyTorch", "OpenCV", "Deep Learning", "TensorFlow"],
    githubUrl: "https://github.com/AsmiiGaurav/Detection-and-Localization-of-Tampering-in-Medical-Images",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My<span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. I hope you find them interesting!
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary/95"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AsmiiGaurav"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
