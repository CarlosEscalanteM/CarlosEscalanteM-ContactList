import React from "react";
import "../../styles/home.css";
import { useEffect, useState } from "react";


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
		<button onClick={() => setCounter (Math.random ())}>Add 1</button>
		</div>
)};
