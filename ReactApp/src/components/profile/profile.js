import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="column">
        <img src={user.picture}/>
        <h2>{user.name}</h2> 
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}{" "}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Profile;
