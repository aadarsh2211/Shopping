import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/AdminView.css"
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminView = () => {
    let [data, setData] = useState([]);
    let [force, setForce] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:2000/Product')
            .then((res) => {
                // console.log("check" + res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [force])//data dependencies
    let removeDish = (id, name) => {
        axios.delete(`http://localhost:2000/Product/${id}`)
            .then((response) => {
                alert(name + " Removed successfully");
                setForce(!force);

            })
            .catch((err) => {
                alert("Data not found");
            })
    }
    let navigate = useNavigate()
    function editProduct(id) {
        navigate(`/adminHomePage/editproudct/${id}`)
    }



    return (
        <div className="AdminViewPage">
            {
                data.map((x) => {
                    return (
                        <div className="displayproducts">
                            <img src={x.thumbnailurl} alt="" />
                            <div className="restaruant">
                                <h4>{x.restname}|| </h4>
                                <b>{x.rating}<StarIcon id="star" /></b>
                            </div>
                            <h6>{x.dishname}</h6>
                            <p>{x.description}</p>
                            <strike>₹{x.price}.00</strike>
                            <div className="disc">
                                <span id="price">₹{x.price - x.price * 20 / 100}</span>
                                <div className="opt">
                                    <EditIcon onClick={() => { editProduct(x.id) }} />
                                    <DeleteForeverIcon onClick={() => { removeDish(x.id, x.dishname) }} />
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    );
}

export default AdminView;