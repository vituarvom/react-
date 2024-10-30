import *as React from "react";
import {useClickAway} from "/.hooks";
import {closeclone} from "./icons";

export default function App(){
    const [isOpen ,setlsOpen]= React.useState(false);
    const ref = useClickAway(() => {setlsOpen(false); 
     });
     const handleOpenModel = () =>{
        if(isOpen === false) {
            setlsOpen(true);
        }
     };
     return (
        <section>
            <h1>useClickAway</h1>
            <button className="link" onClick={handleOpenModel}>Open model</button>
        </section>
        { isOpen &&(<dialog ref={ref}>
        <button onClick={() => setlsOpen(false)}>{closeclone}</button>)  
    <h2>Modal</h2>
    <p>click outside the model to close button</p>
    </dialog>
        }
        
     }



