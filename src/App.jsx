import { useEffect, useState } from "react"

const App = () => {
  const [actors, setActors] = useState([]);
  
  const [emailInput, setEmailInput] = useState('')
  useEffect(() => {
    const getActors = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      const users = await response.json();
      setActors(users);
    }
    getActors();
  }, []);

  return (
    <>
      <h1>Create a new User</h1>
      <form>
      
      <input 
      type = "email" 
      placeholder="email" 
      onChange={(event)=> {setEmailInput(event.target.value)}}
      
      ></input>
      

      <input placeholder="name"></input>

      <input type="password" placeholder="password"></input>

      <input placeholder="role"></input>

      <input placeholder="avatar"></input>

      <button>Create User</button>
      </form>

      {actors.map((individualActor)=> {
        return <li key={individualActor.id}>
          {individualActor.name}
          </li>
      })}
    </>
  )
}

export default App
