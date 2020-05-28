import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // Since this is async, we need to return a function and not an action
  return (dispatch) => {
    // Set the timeout so it is async
    setTimeout(() => {
      // Call dispatch on searchYouTube
      dispatch(searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
        changeVideoList(data);
        changeVideo(data[0]);
      }));
    }, 2000);
  };
};

export default handleVideoSearch;
