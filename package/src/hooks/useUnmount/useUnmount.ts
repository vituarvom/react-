import {useEffect} from "react";

export const useUnmount =(callback :()=> void , deps: any []=[]) =>{
    useEffect(() => {
        return() => {
            callback();
        };
    }, deps);
};
const dependency: any ={};
useUnmount(() => {
    console.log("Component unmounted");

},[dependency]);