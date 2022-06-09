import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMoralis } from "react-moralis";
import Posts from "../components/Posting/Posts";
import defaultProfileImage from "../components/images/defaultProfileImage.png";

const Profile = () => {
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();

  return (
    <Wrapper>
      <div>
        <h1>Welcome {user.attributes.username}</h1>
        <img
          style={{ width: "5rem" }}
          src={
            user.attributes.banner
              ? user.attributes.banner
              : defaultProfileImage
          }
          alt="Profile pic"
        />
        <h3 style={{ margin: "2rem" }}>{`${user.attributes.ethAddress.slice(
          0,
          4
        )}...
            ${user.attributes.ethAddress.slice(38)}`}</h3>
        <h4 style={{ margin: "2rem" }}>{user.attributes.bio}</h4>
        <Posts profile={true} />
        <Link to="/settings">
          <h2 style={{ margin: "2rem" }}>Edit Profile</h2>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;
