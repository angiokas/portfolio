import ProjectDashboard from "../components/ProjectDashboard";
import Section from "../components/Section";
function Projects() {
  return (
    <>
      <Section sectionClassName="projects" title="Projects">
        <ProjectDashboard view="all" />
      </Section>
    </>
  );
}

export default Projects;
