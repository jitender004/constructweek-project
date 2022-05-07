// import { Center,
//     Text,
//     FormControl,
//     Input,
//     FormLabel,
//     Box,
//     Button,} from "@chakra-ui/react"
//     import {Link} from "react-router-dom"
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// export const Login = ()=>{
//     const navigate = useNavigate()

//     const [SignInForm, setSignInForm] = useState({})

//     const handle_SignUpForm_Onchange = (e) => {
//         const {value,name} = e.target
//         setSignInForm({
//             ...SignInForm,
//             [name]:value
//         })
//     }

//     const handle_SignUpForm_OnSubmit = (e) => {
//         e.preventDefault()
//         console.log(SignInForm);
//         let SgIndata = JSON.stringify(SignInForm)
//         postSignInData(SgIndata)
//     }

//     const postSignInData = async (SgIndata) => {
//         try {
            
//             let res = await fetch('https://desolate-woodland-56350.herokuapp.com/login',{
//             method:'POST',
//             body:SgIndata,
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//         console.log('res:', res)

//         let response = await res.json()
//         console.log('response:', response)

//         console.log('response.user:', response.user)
//         console.log('response.user:', response.token)


//         if(response.user === undefined){
//             alert('Please try another email or password')
//             return
//         }

//         navigate('/paymentCardPage')
//         navigate('/')


//         } catch (error) {
//             console.log('error:', error)
            
//         }
//     }

//     return (
//         <div className="main">
//            <Center mb='5'><Text fontSize='5xl'>LOGIN</Text></Center>
//             <Center>
//                 <Box width='30%'>
//                     <FormControl isRequired mb='10'>
//                         <FormLabel htmlFor='Email'>Email</FormLabel>
//                         <Input id='mail' placeholder='' onChange={handle_SignUpForm_Onchange} />
//                     </FormControl>
//                     <FormControl isRequired>
//                         <FormLabel htmlFor='Password'>Password</FormLabel>
//                         <Input id='pass' placeholder='' onChange={handle_SignUpForm_Onchange} />
//                     </FormControl>
//                 </Box>   
//             </Center>
//             <Center><Button width='30%' mt='10' bg='black' color='white'  onSubmit={handle_SignUpForm_OnSubmit}>SIGN IN</Button></Center>
//             <br></br>
//             <Center><Link to="/sign" mt='5' letterSpacing="2.6px">CREATE ACCOUNT</Link></Center>

//         </div>
//     )
// }


import {Tempcontext} from './LogContext'
import "../App.css"
import {Link} from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  //  use reqres to log user in.
  const [data,setData]=useState([])
  
  useEffect(()=>{
    emp()
  },[])
  	async function emp() {
		let res = await fetch('https://bluefly-api.herokuapp.com/user');
		let data = await res.json();
		setData(data);
	}
  
  const [user,setUser]=useState({})
  const nav = useNavigate()
  const { isAuth, toggleAuth } = useContext(Tempcontext)
  function sendToken(e) { 
    e.preventDefault()
    let a=false
    data.map((e)=>{
    
        console.log(user.email);
        if(e.username===user.email || e.password===user.password){
          toggleAuth();
          nav(-2, { replace: true });  
          a=true
        }
    
     
    })
    if(a){
      return 
    }else{
      alert('wrong email or password');
    }
    
  }
  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
  };


  return (
      <div className="main">
         
          <h1 className="head1">LOGIN</h1>
            <form className="loginform" onSubmit={sendToken}>
                <label className="label">EMAIL</label>
                <br></br>
			<input
				name="username"
				type="text"
				placeholder=""
				className="login_username"
				onChange={handelchange}
			/>
            <br></br>
            <br></br>
            <label className="label">PASSWORD</label>
            <br></br>
			<input
				name="password"
				type="password"
				placeholder=""
				className="login_username"
				onChange={handelchange}
			/>
            <br></br>
            <br></br>
			<input type="submit" value="SIGN IN" className="login_submit" />
		</form>
        <br></br>
        <Link to="/sign" textAlign="center">CREATE ACCOUNT</Link>
      </div>
		
  );
};