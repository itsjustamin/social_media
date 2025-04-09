import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://clipart-library.com/2023/beach-clipart-beach-background-clipart-clip-art-0.jpg"
          alt="city"
          className="beachimg"
        />
      </div>
      <div>
        <div>avatar + description</div>
        <div className="posts">
          <div className="item">post1</div>
          <div className="item">post2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
