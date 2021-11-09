import React, { useState } from "react";
import Button from "./Button";

function Video({ video, toggleComments}) {
  const [upvotes, setUpvotes] = useState(0)
  const [downvotes, setDownvotes] = useState(0)
  // const [commentState, setCommentState] = useState(true)

  function handleUpvote() {
    setUpvotes(upvotes + 1)
  }

  function handleDownvote() {
    setDownvotes(downvotes + 1)
  }

  return (
    <>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <h3>{video.views} views | {video.createdAt}</h3>
      <p>
        <Button job="upvote" icon="👍" votes={upvotes} handleClick={handleUpvote} />
        <Button job="downvote" icon="👎" votes={downvotes} handleClick={handleDownvote} />
      </p>
      <p>
        <Button job="Toggle comments" handleClick={toggleComments} votes="0"/>
      </p>
    </>
  );
}

export default Video;
