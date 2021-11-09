import React from "react";

function Comment({ comment }) {
  console.log("comment in comment component", comment)
  return (
    <>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
    </>
  );
}

export default Comment;
