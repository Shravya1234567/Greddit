import React, { Component } from 'react'
import { Box } from '@mui/material';
import { shadows } from '@mui/system';
import TextField from '@mui/material/TextField';
import { typography } from '@mui/system';
import { Button } from '@mui/material';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Alert from '@mui/material/Alert';



const Login = () => {
    const navigate = useNavigate();
    const [email, Setemail] = useState("");
    const [pwd, Setpwd] = useState("");
    const [method, SetMethod] = useState("login");
    const [email1, Setemail1] = useState("");
    const [pwd1, Setpwd1] = useState("");
    const [uname, Setuname] = useState("");
    const [cno, Setcno] = useState("");
    const [age, Setage] = useState("");
    const [fname, Setfn] = useState("");
    const [lname, Setln] = useState("");
    function func() {
        if (email !== "" && pwd !== "") {
            const user = {
                email: email,
                pwd: pwd,
            };
            axios
                .post("/api/login", user)
                .then(function (response) {
                    console.log(response);
                    localStorage.setItem('email', user.email);
                    navigate("/profile");
                    console.log(response.data.email1);
                })
                .catch(function (error) {
                    console.log(error);
                });
            Setemail("");
            Setpwd("");
        }
    }
    function func1() {
        if (email1 !== "" && pwd1 !== "" && uname !== "" && cno !== "" && age !== "" && fname !== "" && lname !== "") {

            const newUser = {
                fname: fname,
                lname: lname,
                uname: uname,
                email1: email1,
                age: age,
                cno: cno,
                pwd1: pwd1,
            };
            console.log(newUser);
            axios
                .post("/api/register", newUser)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            Setemail1("");
            Setpwd1("");
            Setfn("");
            Setln("");
            Setuname("");
            Setcno("");
            Setage("");
            navigate("/");
        }
    }
    if (!(localStorage.getItem("email")))
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Button id='button1' onClick={() => { SetMethod("login") }} type="submit" variant="contained" style={{ backgroundColor: '#e0566d', fontSize: '20px', width: 175 }}>Sign in</Button>
                <Button id='button2' onClick={() => { SetMethod("register") }} type="submit" variant="contained" style={{ backgroundColor: '#e0566d', fontSize: '20px', width: 175 }}>Sign up</Button>
                {method === "login" &&
                    <Box sx={{
                        display: 'flex',
                        boxShadow: 3,
                        alignContent: 'center',
                        width: 350,
                        height: 400,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        backgroundColor: 'white',

                    }}>
                        <div>
                            <AccountCircleIcon style={{ color: '#e0566d', fontSize: '60px' }}></AccountCircleIcon>
                            <br /> <br />
                            <form>
                                <EmailIcon fontSize='medium' style={{ color: '#e0566d', marginRight: '15', marginTop: '10' }}></EmailIcon>
                                <TextField
                                    required
                                    id="ename"
                                    label="Email"
                                    type="email"
                                    onChange={(e) => { Setemail(e.target.value) }}
                                />
                                <br /><br /><br />
                                <VpnKeyIcon fontSize='medium' style={{ color: '#e0566d', marginRight: '15', marginTop: '10' }}></VpnKeyIcon>
                                <TextField
                                    required
                                    id="pwd"
                                    label="Password"
                                    type="password"
                                    // onKeyUp={success()}
                                    onChange={(p) => { Setpwd(p.target.value) }}
                                />
                                <br /><br />
                                <Button id='button' disabled={!(email && pwd)} onClick={() => { func() }} type="submit" variant="contained" style={{ backgroundColor: '#e0566d' }}>Login</Button>
                            </form>
                        </div>
                    </Box>
                }
                {method === "register" &&
                    <Box sx={{
                        display: 'flex',
                        boxShadow: 3,
                        alignContent: 'center',
                        width: 350,
                        height: 700,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        backgroundColor: 'white',

                    }}>
                        <div>
                            <form>
                                <TextField
                                    required
                                    id="fname"
                                    label="First Name"
                                    type="First Name"
                                    onChange={(e) => { Setfn(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="lname"
                                    label="Last Name"
                                    type="Last Name"
                                    onChange={(e) => { Setln(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="usname"
                                    label="User Name"
                                    type="User Name"
                                    onChange={(e) => { Setuname(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="em"
                                    label="Email"
                                    type="email"
                                    onChange={(e) => { Setemail1(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="age"
                                    label="Age"
                                    onChange={(e) => { Setage(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="cno"
                                    label="Contact Number"
                                    onChange={(e) => { Setcno(e.target.value) }}
                                />
                                <br /><br />
                                <TextField
                                    required
                                    id="p"
                                    label="Password"
                                    type="password"
                                    onChange={(p) => { Setpwd1(p.target.value) }}
                                />
                                <br /><br />
                                <Button id='button' disabled={!(email1 && pwd1 && uname && fname && lname && cno && age)} type="submit" onClick={() => { func1() }} variant="contained" style={{ backgroundColor: '#e0566d' }}>Register</Button>
                            </form>
                        </div>
                    </Box>
                }
            </div>
        );
    else {
        window.location = "/profile"
    }
}

export default Login;

