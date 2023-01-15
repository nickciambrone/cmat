import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {addClientToUser} from '../../firebase/firebase.utils';
import './AddClients.styles.scss';

const AddClients = ({  email}) => {

  const navigate = useNavigate();

  const [clientDetails, setClientDetails] = useState([[''],['']])
  const deleteAttribute = (i) => {
  let tempAttributes = clientDetails[0]
  let tempValues = clientDetails[1]
  tempAttributes.splice(i,1)
  tempValues.splice(i,1)
  setClientDetails([tempAttributes, tempValues])

  }
  
  const addAttribute = () =>{

    setClientDetails([[...clientDetails[0],''],[...clientDetails[1],'']])
  }
  const handleChange = (event, ind, t) => {
    if (t=='a'){
      let tempAttributes = clientDetails[0]
      tempAttributes[ind] = event.target.value;
      setClientDetails([tempAttributes, clientDetails[1]])
    }
    if (t=='v'){
      let tempAttributes = clientDetails[1]
      tempAttributes[ind] = event.target.value;
      setClientDetails([clientDetails[0], tempAttributes])
    }
  }
  const handleSubmit = () => {
    let testObj = {}
    for (var i=0; i< clientDetails[0].length;i++){
      testObj[clientDetails[0][i]]=clientDetails[1][i]
    }
    addClientToUser(testObj, email)

  }

  return(
  <div className="add-clients">
    <div style={{width:'60%', marginLeft:'20%'}}>
      <div style={{ backgroundColor: "#dc1a21" }} onClick={() => navigate('/dashboard/myclients')}>
        <span class="material-symbols-outlined">arrow_back</span>
        Go back
      </div>
      <div>
        {clientDetails[0].map((ele, ind)=>
          <div className="input-area" style={{display:'flex', flexDirection:'row'}}>
            <input value = {clientDetails[0][ind]} style={{width:'50%'}} type='text' name ={'attribute'+ind} onChange={(e)=>handleChange(e, ind, 'a')}/>:<input value = {clientDetails[1][ind]} style={{width:'50%'}} type='text' onChange={(e)=>handleChange(e, ind, 'v')}/> 
            <span onClick = {()=>deleteAttribute(ind)}  style={{cursor:'pointer', textAlign:'right',color:'#dc1a21', fontSize:'50px'}} class="material-symbols-outlined">
cancel
</span>
          </div>
          )}
          <div style={{textAlign:'left'}}>
         
          <span onClick = {()=>addAttribute()} style={{color:'green',cursor:'pointer', textAlign:'right', fontSize:'50px'}} class="material-symbols-outlined">
add_circle
</span>
</div>
          <button onClick = {()=>handleSubmit()} type='submit'>Add Client</button>
      </div>
      <div>

      </div>
    </div>
  </div>
);}

export default AddClients;
