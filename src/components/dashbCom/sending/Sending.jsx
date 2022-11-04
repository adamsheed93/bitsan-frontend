import React from 'react'

const Sending = ({connected}) => {
  return (
    <div>
         {connected ? (
              <div className="transaction-box">
                <div className="input-col">
                  <div>
                    <span>
                      Amount in <b>ETH</b>
                    </span>
                    <input placeholder="amount" className="input" />
                  </div>
                </div>
                <div className="input-col">
                  <div>
                    <span>Recipient Address</span>
                    <input placeholder="address to" />
                  </div>
                </div>
                <div className="input-col">
                  <button className="transfer-btn">Transfer</button>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10em" }}>
                <h1>You have to connect your wallet to get going...</h1>
              </div>
            )}

    </div>
  )
}

export default Sending