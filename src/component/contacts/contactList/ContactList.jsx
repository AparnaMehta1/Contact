import React,{useState} from "react";
import { faker } from '@faker-js/faker';
import {  FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { ContactServices } from "../../../services/ContactServices";
import "../contactList/ContactList.css";
import Card from "../../Card";

function ContactList() {
 faker.seed(99)
  const contactDetails = [...Array(20)].map(()=>({
    id : faker.datatype.uuid(),
    Name: faker.name.fullName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    image :faker.internet.avatar(),
  }));
  console.log(contactDetails)
  const [data]= useState(contactDetails); 

 const [contacts, setContacts] = useState([])
  const handleDelete = () =>{
 const filteredData = data.filter((element)=>{
 return element.id != data.id
 })
 console.log(filteredData);
 setContacts(filteredData);
}
  return (
    <div>
      
      <section className="contact-search p-3">
        <div className="contanier">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-fold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2 ">
                    <FaPlusCircle className="me-2" /> New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iusto, quam dolorem ea consectetur non inventore
                  veniam molestias magnam officia placeat soluta reiciendis
                  nulla! Animi quisquam non veritatis, iste quasi, excepturi,
                  debitis similique laboriosam obcaecati corporis enim libero
                  quam vero?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col">
              {data.map((cont)=>{
                return <Card  cont= {cont}
                handleDelete = {handleDelete}/>
              })}
            </div>
            

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactList;
