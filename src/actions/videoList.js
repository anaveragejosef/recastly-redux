var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  // Typing new parameters into Search Field
  // Unique type to define action
  type: "VIDEO_SEARCH",
  // Pass new video object to update video player
  searchQuery: searchQuery
});

export default changeVideoList;
