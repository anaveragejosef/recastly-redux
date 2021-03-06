import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProp = (state) => ({
  video: state.currentVideo
});

var VideoPlayerContainer = connect(
  mapStateToProp
)(VideoPlayer);

export default VideoPlayerContainer;
