import defaultPic from '../images/defaultCover.jpg';
import { IoRocketOutline } from 'react-icons/io5';
const VoteBox = () => {
  return (
    <div className="vote-box">
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
          nesciunt assumenda natus enim possimus id explicabo, similique quidem
          iste ducimus nobis voluptatibus dolor cumque exercitationem libero?
          Iure culpa accusamus recusandae. Lorem
        </div>
        <div className="vote__line"></div>
      </div>
    </div>
  );
};

export default VoteBox;
