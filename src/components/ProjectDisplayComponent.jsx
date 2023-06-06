import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import DisplayCard from './DisplayCard';

const ProjectDisplayComponent = ({ projects = [] }) => {
  const isEmpty = projects.length === 0;
  console.log('projectDisplay: ', projects);
  return isEmpty ? (
    <p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1 ">
      <ExclamationCircleIcon className="shrink-0 w-5 h-5 mt-px" />
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <DisplayCard
          key={index}
          url={project.url}
          title={project.title}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default ProjectDisplayComponent;
