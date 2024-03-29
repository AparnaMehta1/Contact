import React, {useState} from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import EditContact from './contacts/viewContact/ViewContact';



const Card = ({cont,data ,setData, setShowEditModal  }) => {

 

const params = useParams();
const {contactName, contactId} = params

// const handleEditModal = () => {
//   setShowEditModal(true)
//   console.log(id)
 
//   }


 const deleteContact = (i) =>{
     
      const FilteredData = data.filter(x=>{
        return x.id !== cont.id;
      })
      setData(FilteredData);
      console.log(FilteredData);
      
 
    }


  return (
   
    <div className='row'>
    <div className="col-md-6">
    <div className="card">
      <div className="card-body">
       <div className="row align-items-center d-flex justify-content-arround ">
          <div className="col-md-5">
            <img
              className="contact-img"
              src = {cont.image}
              alt="img1"
            />
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                Name: <span className="fw-bold">{cont.name}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Mobile: <span className="fw-bold">{cont.number}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Email:{" "}
                <span className="fw-bold">{cont.email}</span>
              </li>
            </ul>
          </div>

          <div className="col-md-1 align-items-center d-flex flex-column">
            <Link
              to={`/contacts-view/${cont.name}/${cont.id}`}
              className="btn btn-warning my-1"
            >
              <FaEye  />
            </Link>
            <div
              className="btn btn-primary my-1" onClick={() => setShowEditModal(true)}
            >

      
              <FaPencilAlt />
            </div>
            <button className="btn btn-danger my-1"
            onClick={() => deleteContact (cont.id)
          } >
              <FaTrashAlt /> 
            </button>
          </div>
        </div> 
      </div>
    </div>
  </div>
  </div>
  
  )
}
export default Card;