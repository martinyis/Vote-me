import defaultPic from '../images/defaultCover.jpg';
import { IoRocketOutline } from 'react-icons/io5';
import ChangeBar from './ChangeBar';
import { useState } from 'react';
import { Dropdown } from 'rsuite';

const VoteBox = () => {
  const [window, setWindow] = useState(0);
  const [activeOption, setActiveOption] = useState(0);
  const changeWindow = (num) => {
    setWindow(num);
  };
  return (
    <div className="vote-box">
      {window === 0 ? (
        <div className="vote__overview">
          <div className="vote__name">
            <IoRocketOutline size={40} />
            <p>Devault name is supposed to</p>
          </div>
          <div className="vote__picture">
            <img src={defaultPic} alt="" />
          </div>
          <div className="vote__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nesciunt assumenda natus enim possimus id explicabo, similique
            quidem iste ducimus nobis voluptatibus dolor cumque exercitationem
            libero? Iure culpa accusamus recusandae. Lorem
          </div>
          <div className="vote__line"></div>
          <ChangeBar background={window} changeWindow={changeWindow} />
        </div>
      ) : (
        <div className="vote__overview overwiev-2">
          <div className="vote__name">
            <IoRocketOutline size={40} />
            <p>Devault name is supposed to</p>
          </div>
          <div className="vote-question">
            What is the biggest ocean in the world?
          </div>
          <div className="vote-options">
            <div
              className={`vote-option ${
                activeOption === 0 ? 'active-option' : ''
              }`}
            >
              <div className="vote-option-name">first</div>
            </div>
            <div
              className={`vote-option ${
                activeOption === 1 ? 'active-option' : ''
              }`}
            >
              <div className="vote-option-name">second</div>
            </div>
            <div
              className={`vote-option ${
                activeOption === 2 ? 'active-option' : ''
              }`}
            >
              <div className="vote-option-name">third</div>
            </div>
            <div
              className={`vote-option ${
                activeOption === 3 ? 'active-option' : ''
              }`}
            >
              <div className="vote-option-name">fourth</div>
            </div>
          </div>
          <div className="vote__line"></div>
          <ChangeBar background={window} changeWindow={changeWindow} />
        </div>
      )}
    </div>
  );
};

export default VoteBox;
