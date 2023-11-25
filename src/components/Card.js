import React, { useState } from "react";

const Card = ({ family }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const totalFamilyMembers = family.family_members.length;
  
  return (
    <div className="card col-md-5">
      <p>
        <b>Total Family Members: {totalFamilyMembers}</b>
      </p>
      <h1>{family.address}</h1>
      <div className="d-flex justify-content-between">
        <p>Total Vaccinated: {family.total_vaccinated}</p>
        <p>Total Adults: {family.total_adults}</p>
        <p>Total Infants: {family.total_infants}</p>
      </div>
      {showDetails && (
        <div>
          <h3>Family Members:</h3>
          <ol>
            {family.family_members.map((member) => (
              <li key={member.member_id}>
                <ul>
                  <li>
                    <strong>Name:</strong> {member.name}
                  </li>
                  <li>
                    <strong>Age:</strong> {member.age}
                  </li>
                  <li>
                    <strong>Gender:</strong> {member.gender}
                  </li>
                  <li>
                    <strong>Vaccination Status:</strong>{" "}
                    {member.vaccination_status
                      ? "Vaccinated"
                      : "Not Vaccinated"}
                    , <br />
                    {member.vaccination_status && (
                      <span>
                        <strong>Vaccine Received:</strong>{" "}
                        {member.vaccine_received}
                      </span>
                    )}
                  </li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      )}
      <button className="btn btn-warning" onClick={toggleDetails}>
        {showDetails ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Card;
