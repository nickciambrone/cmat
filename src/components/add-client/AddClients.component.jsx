import React from "react";
import { useNavigate } from "react-router-dom";

const AddClients = ({ goBack }) => {
  const navigate = useNavigate();

  return(
  <div className="add-clients">
    <div>
      <div style={{ backgroundColor: "#dc1a21" }} onClick={() => navigate('/dashboard/myclients')}>
        <span class="material-symbols-outlined">arrow_back</span>
        Go back
      </div>
    </div>
    Add Clients
  </div>
);}

export default AddClients;
