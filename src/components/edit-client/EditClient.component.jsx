import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getUsersClient } from '../../firebase/firebase.utils';
export const EditClient = ({email}) =>{

    const { element } = useParams();
    const [client, setClient] = useState({})
    useEffect(()=>{

        const getClient = async ()=>{
            const client = await getUsersClient(email, element)
            setClient(client)
        }

        getClient()
    },[email])


    const handleChange = (e, ind, t) => {
        if (t =='a'){
            let keys = Object.keys(client)
            let values = Object.values(client)

            let oldKey = keys[ind]
            keys[ind] =e.target.value

            let temp = {}
            console.log(keys)
            console.log(client)
            for (var i=0;i<keys.length;i++){
               
                temp[keys[i]] = values[i]
                
               
            }
            setClient(temp)

        }

    }

    return(
        <div className='edit-client'>
            editing element {element} for {email}
            {Object.keys(client).map((ele,ind)=>{
                return(
                    <div><input onChange = {(e)=>handleChange(e, ind, 'a')} value={ele}/>: <input onChange = {(e)=>handleChange(e,ind, 'v')}  value={client[ele]}/></div>
                )
            })}
            
        </div>
    )
}