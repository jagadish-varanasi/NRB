import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

function CardDetails() {
  const { id } = useParams();
  const [member, setMember] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const json = await response.json();
      console.log(json);
      setMember(json);
    })();
  }, []);
  return (
    <div className="card-details">
      <div className="card-image">
        <img src={member?.avatar_url} height="100%" width="100%" alt="avatar" />
      </div>
      <div className="card-item">
        <div>Name:</div>
        <div>{member?.name ?? member?.login}</div>
      </div>
      <div className="card-item">
        <div>Location:</div>
        <div>{member?.location ?? "India"}</div>
      </div>
      <div className="card-item">
        <div>Followers:</div>
        <div>{member?.followers}</div>
      </div>
      <div className="card-item">
        <div>Following:</div>
        <div>{member?.following}</div>
      </div>
    </div>
  );
}

export default CardDetails;
