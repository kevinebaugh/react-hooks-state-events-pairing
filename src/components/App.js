import React, { useState } from "react";

import video from "../data/video.js";
import Video from "./Video";
import Comments from "./Comments";

function App() {
  const [commentState, setCommentState] = useState(true)

  function toggleComments() {
    setCommentState(!commentState)
    console.log("commentState", commentState)
  }

  return (
    <div className="App">
      <Video video={video} toggleComments={toggleComments} />
      <hr/>
      <Comments comments={video.comments} commentState={commentState} />
    </div>
  );
}

export default App;
