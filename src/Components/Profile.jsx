<<<<<<< HEAD
import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile
=======
import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user, id } = useContext(UserContext);
  console.log("Id in Profile => ",id)
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  if (!user) {
    return <div>Please Login</div>;
  }
  return (
    <div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            {console.log("====>>>>user",user)}
            {console.log("====>>>>",user.username)}
            <h2>Welcome {user.userName} with Reference id number {id}</h2>
            <button onClick={closePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
>>>>>>> a4856df6b15f1c455a6d674fa25a098df6da5a6f
