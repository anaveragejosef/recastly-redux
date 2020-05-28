var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  // Typing new parameters into Search Field
  // Unique type to define action
  type: "VIDEOS_UPDATE",
  // Pass new video object to update video player
  videos: videos
});

export default changeVideoList;
