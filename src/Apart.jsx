import React from "react";
import { useState } from "react";
 
export default function Apart() {
  const [inkopPris, setInkopPris] = useState(500000);
  const [insats, setInsats] = useState(75000);
  const [rent, setRent] = useState(2);
  const [amorter, setAmorter] = useState(30);
  const [avgift, setAvgift] = useState(0);
  const [ovrigt, setOvrigt] = useState(0);
  const [warning, setWarning] = useState("");

  const minikrav = (e) => {
    if (!inkopPris) {
      setWarning("Du måste välja ett inköpspris först!");
      return;
    }

    const newValue = e.target.value;
    if (newValue < inkopPris * 0.15) {
      setInsats(inkopPris * 0.15);
      setWarning("OBS! Kontantinstatsen måste vara minst 15% av inköpspriset!");
    } else {
      setInsats(newValue);
      setWarning("");
    }
  };

  function pris() {
    let summa = Math.max(((rent / 100) * (inkopPris - insats)) / 12) + Math.max((inkopPris - insats) / ((amorter) * 12));
    let inkschablonv = parseInt(summa) + parseInt(ovrigt) + parseInt(avgift);
    return inkschablonv;
    }


  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm  mt-10 box-border h-128 w-128 p-4 border-4 ">
        <p className="text-gray-800">Inköpspris: {inkopPris}kr</p>
        <input
          type="range"
          min={insats}
          max={20000000}
          step={25000}
          value={inkopPris}
          onChange={(e) => setInkopPris(e.target.value)}
          className="w-full mt-2"
        />
  
        <p className="text-gray-800 mt-4">Kontantinstats: {insats}kr</p>
        <input
          type="range"
          min={0}
          max={Math.min(inkopPris, 5000000)}
          step={10000}
          value={insats}
          onChange={minikrav}
          className="w-full mt-2"
        />
        <p style={{ color: "red" }}>{warning}</p>
  
        <p className="text-gray-800 mt-4">Ränta: {rent}%</p>
        <input
          type="range"
          min={0}
          max={15}
          step={0.1}
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="w-full mt-2"
        />
  
        <p className="text-gray-800 mt-4">Amortering: {amorter}år</p>
        <input
          type="range"
          min={2}
          max={50}
          step={1}
          value={amorter}
          onChange={(e) => setAmorter(e.target.value)}
          className="w-full mt-2"
        />
  
        <p className="text-gray-800 mt-4">Övrigt: {ovrigt}kr/mån</p>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={ovrigt}
          onChange={(e) => setOvrigt(e.target.value)}
          className="w-full mt-2"
        />
  
        <p className="text-gray-800 mt-4">Avgift: {avgift}kr/mån</p>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={avgift}
          onChange={(e) => setAvgift(e.target.value)}
          className="w-full mt-2"
        />
  
        <p className="text-gray-800 text-xl mt-6">Boendekostnad: {pris()}kr/mån</p>
      </div>
    </div>
  )};