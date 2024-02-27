import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css"
const AdminNavbar = () => {
    return ( 
        <div className="AdminNavbar">
            <div className="logo">
               <Link className="logo-link" to="/adminHomePage"><h1>Pom <span>Zone</span></h1></Link>
            </div>
            <div className="options">
                <Link className="navlinks" to="/adminHomePage/adminview">View</Link>
                <Link className="navlinks" to="/adminHomePage/adminaddprod">Add</Link>
                {/* <Link to ="/adminHomePage/editproudct">EditProduct</Link> */}
            </div>
        </div>
     );
}
 
export default AdminNavbar;