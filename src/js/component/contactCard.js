import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ContactCard = (props) => {
    return <div className="CardContainer d-flex px-3 border border-secondary justify-content-between align-items-center">
        <div className="LeftSide d-flex align-items-center py-3">
            <div className="Image col-3">
                <img className="rounded-circle img-fluid" src="https://thispersondoesnotexist.com/"></img> </div>
            <div className="ContactInformation ps-5">
                <h1>{props.name}</h1>
                <h1>{props.address}</h1>
                <h1>{props.phone}</h1>
                <h1>{props.email}</h1>
            </div>
        </div>

        <div className="RightSide">
            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </div>


    </div>



}

export default ContactCard;

