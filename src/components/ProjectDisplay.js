export default function ProjectDisplay(props) {
  return (
    <div className="projects--display">
      <img
        className="projects-display--image"
        src={props.imageSRC}
        alt={`${props.title}'s thumbnail`}
      />
      <h4 className="projects-display--title">{props.title}</h4>
      <p className="projects-display--description">{props.description}</p>
      <small>
        <a
          className="projects-display--url"
          target="_blank"
          href={props.projectUrl}
          rel="noreferrer"
        >
          View
        </a>
      </small>
    </div>
  );
}
