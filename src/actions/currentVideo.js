var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  // Unique type to define action
  type: "VIDEO_CLICK",
  // Pass new video object to update video player
  video: video
});

export default changeVideo;
