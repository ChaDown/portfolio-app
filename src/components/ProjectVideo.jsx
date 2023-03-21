const ProjectVideo = (props) => {
  return (
    <video
      className={props.project.class}
      src={props.project.src}
      autoPlay='true'
      muted
      loop
    ></video>
  );
};

export default ProjectVideo;
