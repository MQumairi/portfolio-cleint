const ProjectSlide = ({ project }) => {
  if (project == undefined) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  let title = project["title"]["rendered"];

  console.log(project);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectSlide;
