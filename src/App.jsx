import Intro from './components/Intro';
import quivervid from './assets/quivervid.mp4';
import surfstorevid from './assets/surfstore.mp4';
import './App.css';
import ProjectVideo from './components/ProjectVideo';
import ProjectDesc from './components/ProjectDesc';
import { useRef } from 'react';

function App() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const project1 = {
    title: 'Quiver Chat',
    src: quivervid,
    repoLink: 'https://github.com/ChaDown/quiver-chat',
    liveLink: 'https://quiver-chat.onrender.com/',
    class: 'quiverchat-video video',
    description:
      'Quiver Chat is a surfboard review app built with the MERN Stack. It is fully written in TypeScript. The backend is essentially a REST API, which the frontend communicates with to perform CRUD operations. Users must be logged in to comment and are authenticated with PassportJS and JWT',
  };

  const project2 = {
    title: 'SurfStock',
    src: surfstorevid,
    repoLink: 'https://github.com/ChaDown/surfboard-store',
    liveLink: 'https://surf-stock.fly.dev/',
    class: 'surfstock-video video',
    description:
      'SurfStock is a surfboard inventory application. It is a CRUD app where files are stored in MongoDB. The app is built with MVC architecture, making the code clean and readable. The controller functions decide how the data is accessed / manipulated and they then render a view. Here Server-Side Rendering was used, with Pug as the templating engine.',
  };

  return (
    <div>
      <Intro scrollHandler={executeScroll} />
      <section>
        <div ref={myRef} className='project-container'>
          <ProjectVideo project={project1} />
          <ProjectDesc project={project1} />
        </div>
        <div className='project-container'>
          <ProjectDesc project={project2} />
          <ProjectVideo project={project2} />
        </div>
      </section>
    </div>
  );
}

export default App;
