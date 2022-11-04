import React, { useContext } from "react";
import { userCOntext } from "../../../context/context";
import "./dashb.css"
function Dashb() {
  const { user, refetchUser } = useContext(userCOntext);

  return (
    <div className="dashb-body">
      <div className="dashb-top">
        <h1 style={{marginBottom:".2em"}}>Welcome, {user?.user?.fullname.split(" ")[0]}</h1>

        <h3 style={{color:"grey",}}>{user?.user?.businessName}</h3>
      </div>
      <div className="dashb-bottom">
        <div className="dashb-bottom-left">
          <div className="">
            <div className="what-next"><div>What to do next...</div><div>x hide all</div></div>
            <div className="upgrade-account">Upagrade your account</div>
            <div className="balance">
              <div className="balance-top">Balance</div>
              <div className="balance-body">
              <div >
                <div className="balance-amt"><small style={{fontSize:"20px"}}>$</small>0.00</div>
                <div className="balance-label">Available balance</div>
              </div>
              <div className="btn_dashb">
                <button>Top up</button>
                <button>Payout</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activities"> 
          <div className="activities-top">Activities</div>
          <div className="activities-body">
            <div>No activities yet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashb;
