import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <div className="sub_lp">
            <Link to="/admin">
                <img id="i1" src="https://www.svgrepo.com/show/345423/admin.svg" alt="adminImage" />
                <h3>Admin</h3>
            </Link> 
            <Link to="/user">
                <img id="i2" src="https://www.svgrepo.com/show/444023/gui-user-security.svg" alt="userImage" />
                <h3>User</h3>
            </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;