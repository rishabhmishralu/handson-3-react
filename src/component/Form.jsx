import React from 'react'
import { useState } from 'react'
import "./Form.css"



const Form = () => {

  const [user, setUser] = useState({ Username: "", Department: "", Rating: "" })
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [arr1, setArr1] = useState([])
  const [shwitch,setSwitch]=useState(true)




  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(shwitch){
      setArr1([...arr1, user])
    console.log(arr1);
    }
   
    setSwitch(!shwitch)

  }
  return (
  <>

    <div className="form" >

      <form onSubmit={onSubmit}>
      
        { shwitch ? <div id='formdiv'>
        
        
        <h1>User Employee Form</h1>
        <label htmlFor="Username"  className="label">Name : </label>
        <input type="text" name="Username" value={user.Username} onChange={onChangeUser} className="input"/> <br />
        <label htmlFor="Department"  className="label">Department : </label>
        <input type="text" name="Department" value={user.Department} onChange={onChangeUser} className="input"/> <br />
        <label htmlFor="Rating"  className="label">Rating : </label>
        <input type="number" name="Rating" value={user.Rating} onChange={onChangeUser} className="input" /> <br />
        </div>

        
      
      
      :
      <div>
        <h1 className='heading'>User Data</h1>
      
     
      
      <div className="data" >
        
       
        {
          arr1.map((value, index) => {
            return (
            
              
                <div className='flexbox' key={index}>
                  <span>Name: {value.Username}</span>
                  <span> Department: {value.Department}</span>
                  <span> Rating: {value.Rating} </span>
                </div>
              
        
            )
          })
        }
      </div>
      </div>}
      <br></br>
      <button className="button" type="submit">{ shwitch ? <span>Submit</span> : <span>Go Back</span> }</button>
      </form>
    </div>
</>
  )
}

export default Form