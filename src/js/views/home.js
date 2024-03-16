import React from "react";
import "../../styles/home.css";
import { useContext } from "react";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	<div>
		{store.contactList.map(contact => <ContactCard name={contact.full_name} address={contact.address} phone={contact.phone} id= {contact.id} email={contact.email}></ContactCard>)}
			</div>
)};
