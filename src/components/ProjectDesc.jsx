import gh from '../assets/iconmonstr-github-1.svg';
import globe from '../assets/globe-outline.svg';

const ProjectDesc = (props) => {
  return (
    <section className='project-description'>
      <h1>{props.project.title}</h1>
      <p>{props.project.description}</p>
      <div className='desc-buttons'>
        <a onClick={() => window.open(`${props.project.repoLink}`, '_blank')}>
          <img src={gh} alt='Github Logo' />
          <div className='a-text'>Repo</div>
        </a>
        <a onClick={() => window.open(`${props.project.liveLink}`, '_blank')}>
          <img className='globe-icon' src={globe} alt='Globe icon' />
          <div className='a-text'>Live Site</div>
        </a>
      </div>
    </section>
  );
};

export default ProjectDesc;
