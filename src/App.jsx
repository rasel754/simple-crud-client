
import './App.css'

function App() {
    const handleAddUsers = event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const user ={name , email};
      console.log(user);
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('user added successfully')
          form.reset()
        }

      })
    }
  return (
    <>
    <h1>simple crud </h1>
      <form onSubmit={handleAddUsers}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add users" />
      </form>
      
      
    </>
  )
}

export default App
