import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/AdminLogin.css";

const AdminLogin = () => {

    let [uname, setUname] = useState("");
    let [password, setpassword] = useState("");
    let [admin, setAdmin] = useState("[]");
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:2000/AdminSignup")
            .then((res) => {
                setAdmin(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function login(e) {
        let flag = false;
        e.preventDefault();
        admin.map((x) => {
            if (uname === x.email && password === x.password) {
                alert("success loged in!");
                navigate("/adminHomePage");
                flag = true;
            }
        })
        if (flag === false) {
            alert("Invalid username or password")
        }
    }
    return (
        <div className="AdminLogin">

            <form action="" onSubmit={login}>
                <h1>Admin Login</h1>
                <label>
                    Username : <input required type="text" value={uname} onChange={(e) => { setUname(e.target.value) }} placeholder="Enter the username" />
                </label>
                <br />
                <label>
                    Password : <input required type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter the password" />
                </label>
                <br />
                <button>Login</button>
                <p>Are you new to the Page? <Link to="/adminsignup">SignUp Now</Link></p>
            </form>

        </div>
    );
}

export default AdminLogin;