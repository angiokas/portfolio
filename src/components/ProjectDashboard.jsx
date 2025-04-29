import { projects } from "../data/projects";
import "../styles/ProjectDashboard.css";

const ProjectView = {
  ALL: "all",
  FEATURED: "featured",
  OTHER: "other",
};

function ProjectDashboard({ view = "all" }) {
  let visibleProjects = [];
  let title = "Projs";

  if (view === "featured") {
    visibleProjects = projects.filter((p) => p.featured);
    title = "Featured Projects";
  } else if (view === "other") {
    title = "Other Projects";
    visibleProjects = projects.filter((p) => !p.featured);
  } else {
    title = "All Projects";
    visibleProjects = projects;
  }

  const handleClick = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => (
        <button
          onClick={project.link && (() => handleClick(project.link))}
          key={project.id}
          className="project-card"
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </button>
      ))}
    </div>
  );
}

export default ProjectDashboard;
