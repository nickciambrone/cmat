import React from 'react';
import {useParams} from 'react-router-dom';
import { CreateRequest } from '../../components/create-request/CreateRequest.component';
import { OpenRequests } from '../../components/open-requests/OpenRequests.component';
import { RequestHistory } from '../../components/request-history/RequestHistory.component';
import  {ManageClients}  from '../../components/manage-clients/ManageClients.component';
import { UserContext } from '../../contexts/user.context';
import { useContext } from "react";

const Dashboard = () =>{
    const {operation, element} =useParams();
    const {currentUser} = useContext(UserContext)
    return(
        <div className = 'dashboard'>
        {operation == 'open' ? <OpenRequests /> :
        operation == 'create' ? <CreateRequest /> :
        operation =='history' ? <RequestHistory />:
        operation.includes('client') ? <ManageClients user ={currentUser}/>: 'Home'
    }
        
        </div>
        )
}

export default Dashboard