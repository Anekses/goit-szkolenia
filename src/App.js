import { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import { Player } from "./components/Player";

const App = () => {

  // const memoValue = useMemo(
  //   () => checkIfFIrstAndSecondNameIsTheSame(firstName, secondName), 
  // [firstName, secondName])

  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus", "Saturn"])
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(11);
  // const [filteredPlanets, setFilteredPlanets] = useState([])

  // const filteredPlanets = planets.filter(planet => planet.includes(query))

  const filteredPlanets = useMemo(
    () => planets.filter(planet => planet.includes(query)),
    [planets, query]
  )

  return (
    <div>
      <div>
        Numer of clicks: {clicks}
      </div>
      <button type="button" onClick={() => setClicks(prev => prev +1)}>
        Click me!
      </button>
      {filteredPlanets.map(planet => (
        <div key={planet}>{planet}</div>
      ))}
    </div>
  )
}

export default App;
