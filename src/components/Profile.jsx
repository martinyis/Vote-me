import profilePic from '../images/profilePic.png';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__picture">
        <img src={profilePic} alt="profilePic" />
      </div>
      <p className="profile__name">Default name</p>
    </div>
  );
};

export default Profile;
