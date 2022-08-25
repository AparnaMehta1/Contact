import React from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = ({cont , handleDelete}) => {
    
  return (
    <div className='row'>            
    <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <div className="row align-items-center d-flex justify-content-arround ">
          <div className="col-md-4">
            <img
              className="contact-img"
              src = {cont.image}
              alt="img1"
            />
          </div>

          <div className="col-md-7">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                Name: <span className="fw-bold">{cont.Name}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Mobile: <span className="fw-bold">{cont.phoneNumber}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Email:{" "}
                <span className="fw-bold">{cont.email}</span>
              </li>
            </ul>
          </div>

          <div className="col-md-1 align-items-center d-flex flex-column">
            <Link
              to={"/contacts/view/:contactId"}
              className="btn btn-warning my-1"
            >
              <FaEye />
            </Link>
            <Link
              to={"/contacts/edit/:contactId"}
              className="btn btn-primary my-1"
            >
              <FaPencilAlt />
            </Link>
            <button className="btn btn-danger my-1" onClick={handleDelete}>
              <FaTrashAlt /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Card;