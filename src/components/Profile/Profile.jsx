import React from "react";
import styles from "./profile.module.css";
const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src="https://clipart-library.com/2023/beach-clipart-beach-background-clipart-clip-art-0.jpg"
          alt="city"
          className="beachimg"
        />
      </div>
      <div>
        <div>avatar + description</div>
      </div>
    </div>
  );
};
export default Profile;
