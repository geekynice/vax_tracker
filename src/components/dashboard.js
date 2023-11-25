import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({ families }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        {families?.map((family) => (
          <Card key={family.id} family={family} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
