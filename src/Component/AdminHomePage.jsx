import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditProduct from "./EditProduct";

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavbar/>
            <Routes>
                <Route path="/adminview" element={<AdminView/>} />
                <Route path="/adminaddprod" element={<AdminAddProduct/>} />
                <Route path="/editproudct/:id" element={<EditProduct/>} />
            </Routes>
           
        </div>
     );
}
 
export default AdminHomePage;