import React from 'react';
import { useState } from 'react';
import {Button, Form, Modal} from "react-bootstrap"
import {Link} from "react-router-dom";

function EditContact({showEditModal, setShowEditModal}) {

  return (
    
   <Modal show={showEditModal} >
    <Modal.Header>
    <Modal.Title>
    Edit Contact
   </Modal.Title>
    </Modal.Header>
  
   <Modal.Body>
   <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Edit Details</Form.Label>
              <Form.Control
                type="text"
                name = "name"
                placeholder="Name"
                autoFocus
                
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
                name = "number"

                
                required
              />
               <Form.Control
                type="text"
                placeholder="UserId"
                autoFocus
                name = "id"
              
                required
              />
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
                name = "email"
              />
              <Form.Control
                type="text"
                name = "company"
                placeholder="Company"
                autoFocus
                
              />

              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                name = "title"
               
              />
             
            </Form.Group>

             <Modal.Footer>
              <Button variant = "success" >Update</Button>
              <Button variant = "dark"  onClick={()=>{setShowEditModal(false)}}>Cancel</Button>
             </Modal.Footer>
          </Form>
   </Modal.Body>
   </Modal>
  )
}

export default EditContact;