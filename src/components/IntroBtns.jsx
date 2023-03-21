import gh from '../assets/iconmonstr-github-1.svg';
import li from '../assets/iconmonstr-linkedin-3.svg';
import dl from '../assets/download-outline.svg';

import cv from '../assets/Charlie Downes CV 2023.pdf';

const IntroBtns = () => {
  return (
    <div className='intro-buttons'>
      <a
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/charlie-downes-1514233b/',
            '_blank'
          )
        }
      >
        <img src={li} alt='Linked In Logo' />
      </a>
      <a onClick={() => window.open('https://github.com/ChaDown', '_blank')}>
        <img src={gh} alt='Github Logo' />
      </a>
      <a className='download-cv' href={cv}>
        <img src={dl} alt='Download icon' />
        <div className='a-text'>CV</div>
      </a>
    </div>
  );
};

export default IntroBtns;
