import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useState} from 'react';

function CoordinateSetup() {
    const [text, setName] = useState('');
    const [times, setTimes] = useState(2);
    const [luckyNumber, setLuckyNumber]=useState(8);

    const styleDiv = {
        width: "200px",
        padding: "15px 0 15px 0",
        borderTop: "solid 0.5px black"
    }
    useEffect(() => {
        window.addEventListener('click', (e) => {
            e.preventDefault();
           if(e.target.id==='changeName'){
               setName((prev) => prev + 'y');
               setTimes((prev) => prev+Math.round(Math.random() * 100));

           }
           else if(e.target.id==="luckyNumber"){
                setLuckyNumber(Math.round(Math.random()*100));
           }

        });
    }, []);


    return (
        <div style={{display: "flex", justifyContent: "center",alignItems:"center",  flexDirection:"column", height:"100vh"}}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <div style={{width: "200px",marginBottom:"20px"}}>
                    <p>Welcome Cool Guys{text}! </p>
                    <p>You lucky number {luckyNumber} </p>
                    <p>Name has changed {times}times</p>
                </div>
                <div style={styleDiv}>
                    <button id={"changeName"}>Change name</button>
                </div>
                <div style={styleDiv}>
                    <button id={"luckyNumber"}>Get new lucky number!</button>
                </div>
            </div>
        </div>


    )
}

export default CoordinateSetup;


reportWebVitals();