import React from 'react';
import { pick } from "react-smart-utils";

export const Pick = () => {
    const obj = {
        user:{
            name:'Ram',
            age: 20,
            address:{
                state:'Maharastra',
                city:'Mumbai',
                pincode:'421302'
            }
        }
    };
    const result = pick(obj, ['user.name','user.address.state']);
    console.log(result);

    return <></>
}