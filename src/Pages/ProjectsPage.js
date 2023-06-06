import ProjectDisplayComponent from '../components/ProjectDisplayComponent.jsx';
import PROJECTS from '../data/projects.js';

export default function ProjectsPage() {
  console.log(PROJECTS);
  return (
    <div className="mt-8">
      <h1 className="uppercase text-semibold first-letter:text-rose-500 leading-tight text-4xl text-center mb-8 ">
        Projects
      </h1>
      <ProjectDisplayComponent projects={PROJECTS} />
    </div>
  );
}
