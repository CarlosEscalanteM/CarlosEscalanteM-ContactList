import React from "react";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import ContactCard from "../component/contactCard";


export const Home = () => {
	const [contactList,setContactList] = useState ([])
	useEffect (() => {
fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/CarlosEscalanteM")
.then (Response => Response.json())
.then (Result => setContactList(Result))
	},[])
	console.log(contactList)
	return (
	<div>
		{contactList.map (contact => <ContactCard name={contact.full_name} address={contact.address} phone={contact.phone} email={contact.email}></ContactCard>)}
			</div>
)};
