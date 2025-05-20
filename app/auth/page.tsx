"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

const list = [
  {login: "aa", password: "bb"},
  {login: "1234", password: "1234"}
]

export default function Auth() {
        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("")
        function validate() {
if (list.find(c => c.login === login && c.password === password)) {
  return redirect("/home")
} else {
  alert("Please check your password or login info")
}
        }
       return (
  <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-white p-8 rounded-lg shadow-md">
       <input onChange={(e) => setLogin(e.target.value)} className="text-black absolute bottom-60/100 border-solid p-1.5 rounded border-2 placeholder-black border-gray-500"  type="text" name="UserLogin" id="UserLogin" placeholder="Login ID"/>
       <input onChange={(e) => setPassword(e.target.value)} className="text-black absolute bottom-45/100 border-solid p-1.5 rounded border-2 placeholder-black border-gray-500"  type="password" name="UserPassw" id="UserPassw" placeholder="Password"/>
        <button disabled={login == "" || password == "" ? true : false} type="submit" onClick={validate} className="absolute bottom-1/3 bg-black shadow-md rounded-lg w-[200px]">Sign in</button>
    <hr className="bg-gray-500 h-[2px] w-[200px] absolute bottom-1/4"/>
<h6 className="absolute bottom-1/6 text-black">Don't have an account? <a className="text-blue-600" href="/auth/sign-up">Sign up</a></h6>
         </div>
       )
}
 