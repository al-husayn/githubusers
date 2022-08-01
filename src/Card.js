import React from "react";

function Card({ profile }) {
  return (
    <div className="github-profile">
      <img src={profile?.avatar_url} alt="profile" />
      <div className="info">
        <div className="login">{profile?.login}</div>
        <div className="name">{profile?.name}</div>
        <div className="username">{profile?.username}</div>
        <div className="company">{profile?.company}</div>
        <div className="bio">{profile?.bio}</div>
        <div className="email">{profile?.email}</div>
        <div className="blog">{profile?.blog}</div>
        <div className="location">{profile?.location}</div>
        <div className="followers">{profile?.followers}</div>
        <div className="following">{profile?.following}</div>
        <div className="public_repos">{profile?.public_repos}</div>
        <div className="twitter_username">{profile?.twitter_username}</div>
      </div>
    </div>
  );
}

export default Card;
