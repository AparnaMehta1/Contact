import React,{useState} from "react"; 
import {Routes , Route , Navigate , } from "react-router-dom";
import { faker } from '@faker-js/faker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import ContactList from "./component/contacts/contactList/ContactList";
import AddContact from "./component/contacts/addContact/AddContact";
import ViewContact from "./component/contacts/viewContact/ViewContact";
import EditContact from "./component/contacts/editContact/EditContact";

function App() {

  faker.seed(99)
  const contactDetails = [...Array(20)].map(()=>({
    id : faker.datatype.uuid(),
    name: faker.name.fullName(),
    number: faker.phone.number(),
    email: faker.internet.email(),
    image :faker.internet.avatar(),
    company :faker.company.bs(),
    title:faker.finance.account(),
    group :faker.locale = 'en_IND',
  }));
  const [data , setData]= useState(contactDetails); 
  return (
    <div className="App">
      
         <Navbar />  
       <Routes>
        <Route path = {"/"} element = { <Navigate to ={"/contacts/list"} />} />
        <Route path = {"/contacts/list"} element= {<ContactList  data={data}
        setData = {setData}/>} />
        <Route path = {"/contacts/add"} element= {<AddContact />} />
        {/* <Route path = {"/contacts-view/:contactName/:contactId"} element= {<ViewContact data={data}/>} /> */}
        <Route path = {"/contacts-edit/:contactName/:contactId"} element= {<EditContact data={data}/>} />
      </Routes> 

    </div>
  );
}

export default App;
