import React,{useState, useEffect} from "react";
import { faker } from '@faker-js/faker';
import {  FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { ContactServices } from "../../../services/ContactServices";
import "../contactList/ContactList.css";
import Card from "../../Card";
import AddContact from "../addContact/AddContact";

function ContactList() {
 faker.seed(99)
  const contactDetails = [...Array(20)].map(()=>({
    id : faker.datatype.uuid(),
    name: faker.name.fullName(),
    number: faker.phone.number(),
    email: faker.internet.email(),
    image :faker.internet.avatar(),
  }));
  console.log(contactDetails)
  // const showUi = () =>{
  //   const list = localStorage.getItem('newData')
  //   if (list) {
  //       return JSON.parse(localStorage.getItem('newData'));
  //   } else {
  //       return [];
  //   }
  //  }
  const [data , setData]= useState(contactDetails); 
  const [showModal ,  setShowModal] = useState(false);
  const [name , setName ] = useState("");
  const [photo ,setPhoto] = useState ("");
  const [number , setNumber] = useState("");
  const[email , setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title , setTitle] = useState("");
  const [id, setId] = useState("");
  const [search , setSearch] = useState("");
   


 const handleCreate = () =>{
 
  const LoginData = {id, name , photo , email, number , company , title}
  window.localStorge.setItem("LoginData",JSON.stringify(LoginData));
  const newLoginData = window.localStorage.getItem('LoginData',JSON.stringify(LoginData));

    const newData = [...data , newLoginData]
  setData(newData)
  
  setShowModal(false)
  console.log(newData);

  localStorage.setItem("name",name)
  localStorage.setItem("number",number)
  localStorage.setItem("email",email)
  localStorage.setItem("id",id)
  localStorage.setItem("company", company)
  localStorage.setItem("title",title)
 
 };
 
 const handleSearch   = (e) => {
  setSearch(e.target.value)
  

 }
//  const searchData = (e) =>{
//   if(search===""){
//     return data
//   }
//   else {
//     const filteredData = data.filter((a)=>{
//        a.name.toLowerCase().includes(search)
//        setData(filteredData)
//     })
//   }
//   e.preventDefault();
//  }
 







  return (
    <div>
      
      <section className="contact-search p-3">
        <div className="contanier">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-fold">
                  Contact Manager
                 <div onClick={()=>setShowModal(true)} className="btn btn-primary ms-2 ">

                 {/* <Link to={"/contacts/add"} className="btn btn-primary ms-2 "> */}
                    <FaPlusCircle className="me-2" /> New
                  {/* </Link> */}
                 </div>
                 <AddContact
                 showModal = {showModal}
                 setShowModal = {setShowModal}
                  handleCreate = {handleCreate}
                 name = {name}
                 setName = {setName}
                 id = {id}
                 setId = {setId}
                 photo = {photo}
                 setPhoto = {setPhoto}
                 company = {company}
                 setCompany = {setCompany}
                 title = {title}
                 setTitle = {setTitle}
                 number = {number}
                 setNumber = {setNumber}
                 email = {email}
                 setEmail = {setEmail}




                 
                 />
                 
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
                        value={search}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <button
                        // onClick={()=>{
                        //   searchData()
                        // }}
                        className="btn btn-outline-dark"
                        >Search

                        </button>

                      
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
              {data.filter((e)=>{
                return e.name.toLowerCase().includes(search.toLowerCase().trim()) || e.email.toLowerCase().includes(search.toLowerCase().trim())
                
              }).map((cont)=>{
                return <Card  cont= {cont}
                setShowModal = {setShowModal}
               setData = {setData}
                data ={data}/>
              })}
            </div>
            

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactList;
