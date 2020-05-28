import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case: 'VIDEO_PLAYER_CHANGE':
      return state.currentVideo = action.video;
    default:
      return state;
  }
};

export default currentVideoReducer;
