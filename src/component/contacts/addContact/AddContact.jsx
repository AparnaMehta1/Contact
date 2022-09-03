import React from 'react';
import { useState } from 'react';
import {Button, Form, Modal} from "react-bootstrap"
import {Link} from "react-router-dom";

function AddContact({showModal , setShowModal, handleCreate , name , photo , email , number , company , title, setName , setEmail, setCompany , setPhoto , setNumber , setTitle, id , setId}) {

  console.log(name);


  return (
    // <div>
    //   <section className='add-contact p-3 '>
    //     <div className="contanier">
    //       <div className="row">
    //         <div className="col">
    //           <p className="h4 text-success fw-bold">Create Contact</p>
    //           <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aspernatur dolorum recusandae velit fugiat rerum fugit excepturi, aliquam quas nihil consequuntur vitae architecto cupiditate dignissimos maiores earum amet mollitia praesentium.</p>
    //         </div>
    //         <div className="row">
    //           <div className="col-md-4">
    //             <form onSubmit={handleSubmit}>
    //               <div className="mb-2">
    //                 <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required />

    //               </div>
    //               <div className="mb-2">
    //                 <input type="image" alt="img" className='form-control' value = {photo} onChange={(e)=>setPhoto(e.target.value)} placeholder='Photo Url'  />

    //               </div>
    //               <div className="mb-2">
    //                 <input type="number" className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Mobile' required />

    //               </div>
    //               <div className="mb-2">
    //                 <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />

    //               </div>
    //               <div className="mb-2">
    //                 <input type="text" className='form-control' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Company' />

    //               </div>
    //               <div className="mb-2">
    //                 <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />

    //               </div>
    //               <div className="mb-2">
    //                 <select className='form-control'>
    //                   <option value=" ">Select a Group</option>

    //                 </select>
    //                 <div className="mb-2">
    //                 <input type="submit" className='btn btn-success' value='Create'  />
    //                 <Link to={"/contacts/list"} className="btn btn-dark ms-2">Cancel</Link>

    //               </div>
                    

    //               </div>

    //             </form>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
         
    //   </section>
    // </div>
   <Modal show={showModal} >
    <Modal.Header>
    <Modal.Title>
    Add New Contacts
   </Modal.Title>
    </Modal.Header>
  
   <Modal.Body>
   <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                value= {name}
                onChange = {(e)=>setName(e.target.value)}
                required
              />
              {/* <Form.Control
                type="image"
                placeholder="photo url"
                alt = "img"
                autoFocus
                value= {photo}
                onChange = {(e)=>setPhoto(e.target.value)}
              /> */}
              <Form.Control
                type="number"
                placeholder="Number"
                autoFocus
                value= {number}
                onChange = {(e)=>setNumber(e.target.value)}
                required
              />
               <Form.Control
                type="number"
                placeholder="UserId"
                autoFocus
                value= {id}
                onChange = {(e)=>setId(e.target.value)}
                required
              />
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
                value= {email}
                onChange = {(e)=>setEmail(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Company"
                autoFocus
                value= {company}
                onChange = {(e)=>setCompany(e.target.value)}
              />

              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                value= {title}
                onChange = {(e)=>setTitle(e.target.value)}
              />
             
            </Form.Group>

             <Modal.Footer>
              <Button variant = "success" onClick = {handleCreate} >Create</Button>
              <Button variant = "dark"  onClick={()=>{setShowModal(false)}}>Cancel</Button>
             </Modal.Footer>
          </Form>
   </Modal.Body>
   </Modal>
  )
}

export default AddContact;