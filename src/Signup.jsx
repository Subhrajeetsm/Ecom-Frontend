import {useState} from "react"
import "./Signup.css";


function Signup() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [role, setrole] = useState('')


  let onsubmit=async (event)=>{
                let userdetails={
                  username,password,email,role
                }
                event.preventDefault();
               let result=await fetch('http://localhost:3000/auth/register',{
                  method:'POST',
                  headers:{
                    "Content-Type": "application/json"
                  },
                  body:JSON.stringify(userdetails)
                })
            let finalresponse=await result.json();
            //sever or backend will send a token as a resopnse
            if(finalresponse.token)
            {
              localStorage.setItem("Token",finalresponse.token)
            }
            else{
                alert(finalresponse.msg||"somthig went worng")
            }
         }


  return (
    <>
    <form className="signup-form" onSubmit={onsubmit} >
     <h2>Create your account</h2>
     <p>Welcome! Please fill in the details to get started.</p>
     <div>
        <label >username</label>
        <input onChange={(e)=>{
            setusername(e.target.value)
        }}  type="text"   placeholder="username"   />
     </div>

     <div>
        <label >email</label>
        <input onChange={(e)=>{
               setemail(e.target.value)
        }}     type="text" placeholder="email" />
     </div>

     <div>
         <label>password</label>
         <input onChange={(e)=>{
            setpassword(e.target.value)
         }} type="text" placeholder="password" />
     </div>

     <div>
       <label>role</label>
       <select
  onChange={(e) => {
    setrole(e.target.value);
  }}
>
  <option value="">Select Role</option>
  <option value="buyer">Buyer</option>
  <option value="seller">Seller</option>
</select>
     </div>
      <button className="signup-btn" type="submit" >register</button>
    </form>

    </>
  )
}

export default Signup