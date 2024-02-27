import { useState } from "react";
import "../Styles/AdminSignUp.css";
import axios from "axios";
const AdminSignUp = () => {
    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [phone, setphone] = useState("");
    let [password, setpassword] = useState("");
    let [profile, setprofile] = useState("");

    let admin = { name, email, phone, password, profile };
    
    let addAdmin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2000/AdminSignup', admin)
            .then((res) => {
                alert("Admin added successfully")
            })
            .catch((err) => {
                alert("Invalid Data")
            })
    }

    return (
        <div className="AdminSignUp">
            <form action="" onSubmit={addAdmin}>
                <h1>Admin Sign Up</h1>
                <label>
                    Name : <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Enter the Username" required />
                </label>
                <br />
                <label>
                    Email : <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter the email" required />
                </label><br />
                <label>
                    Phone : <input type="tel" value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder="Enter the phone" required />
                </label><br />
                <label>
                    Password : <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter the password" required />
                </label><br />
                <label>
                    ImgUrl : <input type="profile" value={profile} onChange={(e) => { setprofile(e.target.value) }} placeholder="Enter the profile" required />
                </label><br />
                <button>Register</button>
            </form>
        </div>
    );
}

export default AdminSignUp;