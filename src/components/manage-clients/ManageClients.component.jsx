import React, { useState, useEffect } from "react";
import "./ManageClients.styles.scss";
import { useParams } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../firebase/firebase.utils";
import { getUsersClientCollecion } from "../../firebase/firebase.utils";
import AddClients from "../add-client/AddClients.component";
import {MyClients} from "../my-clients/MyClients.component";

import { useNavigate } from "react-router-dom";

export const ManageClients = (props) => {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const { operation } = useParams();

  console.log(props.user);
  useEffect(() => {
    console.log(props.user);

    if (props.user) {
      const tempFunc = async () => {
        const clients = await getUsersClientCollecion(props.user.email);
        console.log(clients);
        setClients(clients);
      };
      tempFunc().catch(console.error);
    }
  }, [props.user]);

  return (
    <div className="manage-clients">
      {operation == "myclients" ? (<MyClients clients={clients}/>) : 
      operation == "addclients" ? (<AddClients />) : (
        ""
      )}
    </div>
  );
};
