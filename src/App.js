import React from "react"; import {Routes , Route , Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import ContactList from "./component/contacts/contactList/ContactList";
import AddContact from "./component/contacts/addContact/AddContact";
import ViewContact from "./component/contacts/viewContact/ViewContact";
import EditContact from "./component/contacts/editContact/EditContact";

function App() {
  return (
    <div className="App">
      
         <Navbar />  
       <Routes>
        <Route path = {"/"} element = { <Navigate to ={"/contacts/list"} />} />
        <Route path = {"/contacts/list"} element= {<ContactList/>} />
        <Route path = {"/contacts/add"} element= {<AddContact />} />
        <Route path = {"/contacts/view/:contactId"} element= {<ViewContact/>} />
        <Route path = {"/contacts/edit/:contactId"} element= {<EditContact/>} />
      </Routes> 

    </div>
  );
}

export default App;
