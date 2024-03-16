import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    return <div className="CardContainer d-flex px-3 border border-secondary justify-content-between align-items-center">
        <div className="LeftSide d-flex align-items-center py-3">
            <div className="Image col-3">
                <img className="rounded-circle img-fluid" src="https://thispersondoesnotexist.com/"></img> 
            </div>
            <div className="ContactInformation ps-5">
                <h1>{props.name}</h1>
                <h1>{props.address}</h1>
                <h1>{props.phone}</h1>
                <h1>{props.email}</h1>
            </div>
        </div>

        <div className="RightSide">
            <Link to = {`/editcontact/${props.id}`}> 
                <FontAwesomeIcon icon={faPencil}  ></FontAwesomeIcon>
            </Link>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => actions.deleteContact(props.id)}></FontAwesomeIcon>
        </div>


    </div>



}

export default ContactCard;

