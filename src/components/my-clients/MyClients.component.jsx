import React from 'react';
import { useNavigate } from "react-router-dom";

export const MyClients = ({clients})=>{
    const navigate = useNavigate();
    return (
        <div className="my-clients">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "10px",
            }}
          >
            <div
              onClick={() => navigate("/dashboard/addclients")}
              style={{
                cursor: "pointer",
                borderRadius: "5px",
                color: "white",
                border: "1px solid black",
                backgroundColor: "#dc1a21",
                marginRight: "10%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "10px 20px",
                boxShadow:
                  "rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset",
              }}
            >
              <span class="material-symbols-outlined">add</span>
              Add new client
            </div>
          </div>
          <span>My Clients:</span>

          {clients.map((ele, ind) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                boxShadow:
                  "rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                {Object.keys(ele).map((elem, inde) => (
                  <div>
                    {elem}: {ele[elem]}
                  </div>
                ))}
              </div>
              <div style={{ width: "20%", padding: "40px" }}>
                {" "}
                <span class="material-symbols-outlined">edit</span>
              </div>
            </div>
          ))}
        </div>
    )
}