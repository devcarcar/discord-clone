"use client"
export default function Signin() {


   async function search(formData:FormData) {
    const login = formData.get("UserLogin");
    const password = formData.get("UserPassw")
alert(`Your login: ${login}, password: ${password}`)
      }
    
   return (
       <div>
       <h3>Sign in Page</h3>
       <form action={search}  className="flex justify-center items-center h-screen">
       <label className="absolute bottom-60/100 right-57/100">Enter Your Login ID:</label>
   <input className=" absolute bottom-59/100 border-white border-2 border-solid p-1.5"  type="text" name="UserLogin" id="UserLogin" placeholder="Login ID"/>
   <label className="absolute bottom-49/100 right-57/100">Enter your password:</label>
   <input className=" absolute bottom-49/100 border-white border-2 border-solid p-1.5"  type="text" name="UserPassw" id="UserPassw" placeholder="Password"/>
    <input type="submit"/>
     </form>
     </div>
   )
   
}
