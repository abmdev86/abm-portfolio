import PROJECTS from '../data/projects';
const ProjectCard = ({ imageSrc, name, year, url }) => {
  return (
    <>
      <div className=" content-start justify-center items-start flex flex-[0_0_auto] flex-col gap-[10px] h-auto overflow-hidden p-0 relative w-full">
        <div className=" flex-[0_0_auto] h-[350px] overflow-hidden relative w-full">
          {/* picture */}
          {!imageSrc ? (
            <div className=" absolute [border-radius:inherit] inset-0 [background-size:16px_16px] bg-placeholder border border-[rgb(196,196,196)] " />
          ) : (
            <div
              style={{
                backgroundImage: `url(${imageSrc})`,
              }}
              className=" absolute [border-radius:inherit] inset-0 bg-cover bg-center  border border-[rgb(196,196,196)] "
            />
          )}
        </div>
        {/* info */}
        <div className=" content-center justify-between items-center flex flex-[0_0_auto] h-min overflow-hidden p-0 relative w-full">
          <div className=" outline-none flex  flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre w-auto">
            <a href={url}>
              <p className=" font-sans tracking-normal text-left m-0 p-0 font-semibold text-black">
                {name}
              </p>
            </a>
          </div>
          <div className=" outline-none flex  flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre w-auto">
            <p className=" font-sans tracking-normal text-left m-0 p-0 font-semibold">
              {year}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ProjectListView() {
  return (
    <>
      {/* project list */}
      <div className=" gap-[30px] p-[0px_30px] w-[810px] justify-start items-start flex flex-[0_0_auto] flex-col md:gap-[50px] h-auto max-w-full overflow-hidden md:p-[0px_50px] relative md:w-full last:border-b">
        {/* project */}

        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            imageSrc={project.img}
            year={project.year}
            url={project.url}
          />
        ))}
      </div>
    </>
  );
}

// ProjectListView.propTypes = {
//   projects: PropTypes.arrayOf({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     img: PropTypes.string,
//     url: PropTypes.string,
//     year: PropTypes.string,
//   }).isRequired,
// };
