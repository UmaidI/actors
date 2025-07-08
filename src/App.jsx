import { useEffect, useState } from "react"

const App = () => {
  const [actors, setActors] = useState([]);
  
  const [emailInput, setEmailInput] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  
  useEffect(() => {
    const getActors = async () => {
      try{
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const users = await response.json();
        setActors(users);
      } catch(err){
        console.log(err);
      }
    }
    getActors();
  }, []);

  const createUser = async (event) => {
    event.preventDefault();
    // console.log(emailInput);
    // console.log(name);
    // console.log(password);
    // console.log(role);
    // console.log(avatar);
  
    try{
      const response = await fetch("https://api.escuelajs.co/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          name: name,
          password: password,
          role: role,
          avatar: avatar
        })
      })

      const newActor = await response.json();
      const newActorsArray = [...actors, newActor];
      setActors(newActorsArray);
      
    } catch(err){
      console.log(err);
    }
  
  }


  return (
    <>
      <h1>Create a new User</h1>
      <form onSubmit={createUser}>
      
      <input 
        type = "email" 
        placeholder="email" 
        onChange={(event)=> {setEmailInput(event.target.value)}}
      
      ></input>
      

      <input 
        placeholder="name"
        onChange={(event) => setName(event.target.value)}  
      >
        
      </input>

      <input 
        type="password" 
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      >

      </input>

      <input 
        placeholder="role"
        onChange={(event) => setRole(event.target.value)}  
      >
        
      </input>

      <input 
        placeholder="avatar"
        onChange={(event) => setAvatar(event.target.value)}  
      >
        
      </input>

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
