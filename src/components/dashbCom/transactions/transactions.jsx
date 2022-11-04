import React from 'react'

function Transactions() {
  return (
    <div>
         <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th >
            <th>Date</th>
            <th>From / To</th>
            <th>Amount (usdt)</th>
          </tr>
        </thead>
        <tbody>
          {/* {users && users.map((user, i) => {
            return (
              <tr key={user.id}>
                <td>{i+1}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td> {user.address.substring(0, 8)}...</td>
                <td>{user.businessName}</td>
              </tr>
            );
          })} */}
          <tr>
            <td>1</td>
            <td>Payout</td>
            <td>2/10/22</td>
            <td>
              {"0xD103aF4c528b9335fa26dD7304F3f21Cecf0bAAc".substring(0, 8)}...
            </td>
            <td>1.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Incoming</td>
            <td>8/10/20</td>
            <td>
              {"0xc97A4DFe181d553a5c8a357A7b26E4cdDb7d088D".substring(0, 8)}...
            </td>
            <td>4.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions