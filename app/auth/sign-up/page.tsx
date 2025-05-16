"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Signup() {

 const [login, setLogin]=  useState("")
    const [password, setPassword] = useState("")

      function search(formData:FormData) {
        const login = formData.get("UserLogin");
        const password = formData.get("UserPassw")
        alert(`Signup executed with ${login} as login and ${password} as password`);
      }
    
   return (
       <div>
       <h3>Sign up Page</h3>
       <form action={search}  className="flex justify-center items-center h-screen">
       <label className="absolute bottom-60/100 right-57/100">Enter Your Login ID:</label>
   <input className=" absolute bottom-59/100 border-white border-2 border-solid p-1.5" onChange={(e) => setLogin(e.target.value)} type="text" name="UserLogin" id="UserLogin" placeholder="Login ID"/><h3 className="absolute bottom-60/100 right-57/100">Enter Your Login ID:</h3>
   <label className="absolute bottom-49/100 right-57/100">Enter your password:</label>
   <input className=" absolute bottom-49/100 border-white border-2 border-solid p-1.5" type="text" onChange={(e) => setPassword(e.target.value)} name="UserPassw" id="UserPassw" placeholder="Password"/>
    <input type="submit"/>
     </form>
     </div>
   )
   
}
