import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  function toogleLike() {
    setIsLiked(!isLiked);
  }
  return (
    <>
      <p onClick={toogleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
