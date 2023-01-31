import React from "react";
import { useState } from "react";
import Apart from "./Apart";
import House from "./House";

export default function App() {
  const [displayOption, setDisplayOption] = useState("");

  const optionApart = () => {
    setDisplayOption("option1");
  }

  const optionHouse = () => {
    setDisplayOption("option2");
  }

  return(
    <><div>
      <h2 className="text-3xl font-semibold flex justify-center text-bold">Prisberäknare</h2>
<div className=" flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={optionApart}>Lägenhet</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={optionHouse}>Villa</button>
      </div>
      {displayOption === "option1" ? <Apart /> : null}
      {displayOption === "option2" ? <House /> : null}
    </div></>
)
}

