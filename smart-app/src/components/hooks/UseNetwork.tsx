import React from 'react';
import { useNetwork } from 'react-smart-utils';

const UseNetwork = () => {
  const { isOnline, networkName, networkSpeed, connectionType } = useNetwork();

  return (
    <div>
      <h2>Network Status</h2>
      <p>Online: {isOnline ? 'Yes' : 'No'}`</p>
      <p>Network Name: {networkName || 'N/A'}</p>
      <p>Network Speed: {networkSpeed ? `${networkSpeed} Mbps` : 'Unknown'}</p>
      <p>Connection Type: {connectionType || 'Unknown'}</p>
    </div>
  );
};

export default UseNetwork ;