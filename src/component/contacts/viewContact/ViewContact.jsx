import React from "react";
import { Link, useParams } from "react-router-dom";

function EditContact({data}) {
  const params = useParams();
  const {contactId , contactName} = params;

  return (
    
    <div>
       <section className="view-contact p-3 ">
        <div className="contanier">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                atque voluptatum aut adipisci voluptates nisi dolore dolores. Ea
                sunt nemo tenetur, commodi odit in inventore quibusdam
                reiciendis exercitationem molestias rem?
              </p>
            </div>
          </div>
        </div>
      </section>
      {data?.map((e)=>{
        if(e.id=== contactId){
          return (
            <section className="view-contact mt-3">
            <div className="contanier">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img
                    src={e.image}
                    className="contact-img" alt ="img"
                  />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action  ">
                      Name: <span className="fw-bold">{e.name}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile: <span className="fw-bold">{e.number}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Email: <span className="fw-bold">{e.email}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Company: <span className="fw-bold">{e.company}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Title: <span className="fw-bold">{e.title}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Group: <span className="fw-bold">{e.group}</span>
                    </li>
              
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <Link to={"/contacts/list"} className="btn btn-warning">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </section>
          )
        }
      })}

     
     
    </div>
  );
}

export default EditContact;
