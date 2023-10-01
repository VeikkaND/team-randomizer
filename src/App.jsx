import { useState } from 'react'
import './index.css'
import Papa from "papaparse"
import Team from "./components/Team"

function App() {
  const [teams, setTeams] = useState([])
  const [numOfTeams, setNumOfTeams] = useState(1)

  const sortTeams = (names) => {
    // setTeams
    var teams = []
    for(let j = 0; j < numOfTeams; j++) {
      // create empty arrays for teams
      teams[j]=[]
    }
    let i = 0
    names.forEach(name => { // fill teams with names
      teams[i].push(name)
      if(i < numOfTeams - 1) {
        i++
      } else {
        i = 0
      }
    })
    setTeams(teams)
  }

  const groupName = (names) => {
    let i = 0
    let namesArray = []
    names.forEach(element => {
      if(i !== 0) { 
        namesArray.push(element[1])
      }
      i++
    })
    sortTeams(namesArray)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setNumOfTeams(event.target.numOfTeams.value)
    const file = event.target.file.files[0]
    Papa.parse(file, {
      complete: function(results, parser) {
          groupName(results.data)
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file'></input>
        <br></br>
        number of teams: <input name='numOfTeams'></input>
        <br></br>
        <button type='submit'>randomize</button>
      </form>
      <h3>teams</h3>
      <div>
        {teams.length > 0 &&
          teams.map((team) => 
            <Team members={team} key={team}></Team>
          )
        }
      </div>
    </div>
  )
}

export default App
