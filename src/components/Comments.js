import React from "react";
import Comment from "./Comment";

function Comments({ comments, commentState }) {
  console.log("commentState", commentState)

  if (commentState === true) {
    return (
      <>
        <h3>{comments.length} comments</h3>
        {comments.map( (comment) => {
          return <Comment comment={comment} key={comment.id} />
        })}
      </>
    )
  } else {
    return null
  }
}

export default Comments;
