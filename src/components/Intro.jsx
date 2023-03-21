import { TypeAnimation } from 'react-type-animation';
import IntroBtns from './IntroBtns';
import arrow from '../assets/arrow-down-outline.svg';

const Intro = (props) => {
  return (
    <section className='intro-section'>
      <div className='intro-container'>
        <h1 className='intro-name'>
          <div className='intro-hi'>Hi, </div>
          <div className='intro-im'>I'm </div>
          <div className='intro-charlie'>Charlie</div>
        </h1>
        <TypeAnimation
          sequence={[2500, "I'm a Full Stack Web Developer from Ireland"]}
          wrapper='h2'
          className='type-animation'
        />
        <p className='intro-p'>
          I used to be a Maths teacher, but I didn't love it. I started
          programming and I quickly knew that this was what I wanted to do with
          my life. The challenges, the problem solving, the endless
          possibilities. I'm so excited to join a team, learn and contribute.
          Let's work together!{' '}
        </p>
        <IntroBtns />
        <button onClick={props.scrollHandler} className='recent-btn'>
          Recent Projects
          <img className='down-arrow' src={arrow} alt='Down arrow' />
        </button>
      </div>
    </section>
  );
};

export default Intro;
