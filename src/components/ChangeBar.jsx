const ChangeBar = (props) => {
  const { changeWindow, background } = props;
  return (
    <div className="change-bar">
      <button
        onClick={() => {
          changeWindow(0);
        }}
        className={`change-bar-btn ${background === 0 ? 'active-bar' : ''}`}
      >
        Description
      </button>
      <button
        onClick={() => {
          changeWindow(1);
        }}
        className={`change-bar-btn ${background === 1 ? 'active-bar' : ''}`}
      >
        Vote
      </button>
    </div>
  );
};

export default ChangeBar;
