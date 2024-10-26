import React from "react";
import { useNetwork } from "react-smart-utils";

export const UseNetwork = () => {
  const { isOnline, networkName, networkSpeed, connectionType } = useNetwork();

  return (
    <div>
      <p>User is {isOnline ? "Online" : "Offline"}</p>
      <p>User's networkName name is {networkName}</p>
      <p>User's networkSpeed is {networkSpeed}</p>
      <p>User's connectionType is {connectionType}</p>
    </div>
  );
};
