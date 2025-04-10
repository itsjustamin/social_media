import React from "react";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <div className="myPost-item">My post</div>
      <div className="newPost-item">New post</div>
      <div className={styles.posts}>
        <div className={styles.item}>post1</div>
        <div className={styles.item}>post2</div>
      </div>
    </div>
  );
};
export default MyPosts;
