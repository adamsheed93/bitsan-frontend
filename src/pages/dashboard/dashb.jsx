import React, { useState, useRef, useEffect } from "react";
import "./dashb.css";
import Identicon from "react-identicons";
import { slideItems } from "../../data";
import { NavLink, useNavigate } from "react-router-dom";
import Sending from "../../components/dashbCom/sending/Sending";
import Profile from "../../components/dashbCom/profile/Profile";
import Settings from "../../components/dashbCom/settings/Settings";
import IdenticonImg from "../../components/identicon";
import { FiLogOut } from "react-icons/fi";
import Web3 from "web3";
import { useContext } from "react";
import { userCOntext } from "../../context/context";
import GetUsers from "../../components/dashbCom/users/users";
import Transactions from "../../components/dashbCom/transactions/transactions";
import Dashb from "../../components/dashbCom/dashb/dashb";
// import { Accounts } from "web3-eth-accounts";

function Dashboard() {
  const { user, refetchUser } = useContext(userCOntext);
  const [connected, setConnected] = useState(true);

  const [tab, setTab] = useState("/dashboard");
  const [accountInfo, setAccountInfo] = useState(null);
  const provider =
    "https://goerli.infura.io/v3/a55fe6484cc74df28d02d2cc262c5581";
  var web3 = new Web3(provider);

  const navigate = useNavigate();

  useEffect(() => {
    // setAccountInfo(web3.eth.accounts.create(web3.utils.randomHex(32)));
    refetchUser();
  }, []);

  console.log(user?.user?.address);
  console.log("user ", user);

  return (
    <div>
      <div className="dashboard-container">
        <div classN ame="dashboard-left">
          <div className="sidebar">
            <div className="slideContent">
              <div className="sidebar-top">

                <div style={{ display: "flex", alignItems: "flex-end",marginBottom:".7em" }}>
                  <div className="profile-img">
                    <IdenticonImg />
                  </div>
                  &nbsp; &nbsp;
                  <h3 style={{ fontSize: "20px" }}>{user?.user?.fullname}</h3>
                </div>
                <h4>{user?.user?.address && user?.user?.address.substring(0,20)}...</h4>
              </div>
              

              <div className="sidebar-bottom">
                <ul>
                  {slideItems.map((items, i) => (
                    <li
                      key={i}
                      onClick={() => setTab(items.path)}
                      style={{ cursor: "pointer" }}
                      className={tab === items.path ? "activeTab" : ""}
                    >
                      {items.icon}&nbsp;&nbsp;{items.title}
                    </li>
                  ))}
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      localStorage.removeItem("bitsanAccessToken");
                      localStorage.removeItem("bitsanRefreshToken");

                      const bitsanAccessToken =
                        localStorage.getItem("bitsanAccessToken");
                      const bitsanRefreshToken =
                        localStorage.getItem("bitsanRefreshToken");

                      // console.log("access token", bitsanAccessToken);
                      // console.log("refresh token ", bitsanRefreshToken);

                      refetchUser();
                      setTimeout(() => {
                        navigate("/signin", { replace: true });
                      }, 100);
                    }}
                  >
                    <FiLogOut /> &nbsp;&nbsp;Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-header">
            <div className="header-right">
              {/* {user?.user?.address && user?.user?.address} */}
            </div>
            <div className="header-left">
              {/* <button
                className="connect-wallet"
                onClick={() => setConnected(!connected)}
              >
                {!user?.user?.address ? "Connect wallet" : "Disconnect wallet"}
              </button> */}
            </div>
          </div>
          <div className="body" style={{ marginTop: "6em" }}>
            {tab === "/dashboard" ? ( 
              <Dashb connected={connected} />
            ) : tab === "/profile" ? (
              <Profile
                address={user?.user?.address}
                accountInfo={accountInfo}
              />
            ) : tab === "/settings" ? (
              tab === "/settings" && <Settings address={user?.user?.address} />
            ) : tab === "/users" ? <GetUsers /> :  tab === "/transactions" ? <Transactions /> : tab === "/payout" &&   <Sending connected={connected} /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
