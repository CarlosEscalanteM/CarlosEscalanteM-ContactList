import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useLocation, useParams } from "react-router";

export const AddContact = () => {
    const { store, actions } = useContext(Context); 
    const navigate = useNavigate()
    const location = useLocation()
    const [full_name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const params = useParams()
    const id = params.id

    // example.com/editContact/
    // <Route path="/editContact/:id/about/you/:me/hi"
    // const params = useParams()
    // params.id | params.me | >> params.about << WRONG

    // example.com/editContact/100/about/you/Ermesto Gonzalez/hi    << ACTUAL WEBSITE NOT CODE
    // params.id >> 100
    // params.me >> Ernesto Gonzalez

    function handleSubmit(e) {
        e.preventDefault()
        if (location.pathname.toLowerCase() == "/addcontact"){
            actions.addContact(full_name, email, address, phone)
        }
        if (location.pathname.toLowerCase() == `/editcontact/${id}`){
            actions.editContact(id, full_name, email, address, phone)
        }
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="formFullName">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="formFullName"
                    placeholder="Enter Full Name"
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="formEmail">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="formAddress">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="formAddress"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="formPhone">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="formPhone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};
