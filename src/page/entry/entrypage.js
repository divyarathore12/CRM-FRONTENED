import React ,{useState} from "react";
 import "./entrystyle.css"
 import { LoginForm } from "../../components/logincomponent";
 import { ResetPassword } from "../../components/passwordreset";
import { useAccordionButton } from "react-bootstrap";
export const Entry=()=>{
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[frm,setfrmload]=useState("login");
  const handleonchange=e=>{
   const{name,value}=e.target;
   switch(name)
   {
    case "email":
        setemail(value);
        break;
    case "password":
        setpassword(value);
        break;
        default:
        break;

   }
//    console.log(name,value);
  };
  const handleonsubmit=e=>{
// e.preventDefault();
    if(!email||!password)
    {
        alert("fill the form !!!");
    }
    console.log(email,password)
  }
  const frmswitch=frmtype=>{
    setfrmload(frmtype);
  }
  const handleonResetsubmit=e=>{
    if(!email)
    {
      alert("enter the email!!!")
    }
  }
  
    return <div className="entry-page bg-info ">
        <div className="p-5 bg-light shadow-lg text-dark box-form">  

    {frm=="login"&&<LoginForm handleonResetsubmit={handleonResetsubmit} frmswitch={frmswitch} handleonchange={handleonchange} email={email} pass={password}></LoginForm>}
    {frm=="reset"&&<ResetPassword>handleonchange={handleonchange} frmswitch={frmswitch} handleonsubmit={handleonsubmit} email={email}</ResetPassword>}
    
    </div>

    </div>

    
    
}