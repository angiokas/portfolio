import ProjectDashboard from "../components/ProjectDashboard";
import About from "../components/About";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Section sectionClassName="about" title="About">
        <About />
      </Section>
      <Section sectionClassName="projects" title="Featured Projects">
        <ProjectDashboard view="featured" />
      </Section>
    </>
  );
}

export default Home;
