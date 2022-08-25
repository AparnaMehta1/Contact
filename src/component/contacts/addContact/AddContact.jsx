import React from 'react';
import {Link} from "react-router-dom";

function AddContact() {
  return (
    <div>
      <section className='add-contact p-3 '>
        <div className="contanier">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aspernatur dolorum recusandae velit fugiat rerum fugit excepturi, aliquam quas nihil consequuntur vitae architecto cupiditate dignissimos maiores earum amet mollitia praesentium.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Name' />

                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Photo Url' />

                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Mobile' />

                  </div>
                  <div className="mb-2">
                    <input type="email" className='form-control' placeholder='Email' />

                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Company' />

                  </div>
                  <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Title' />

                  </div>
                  <div className="mb-2">
                    <select className='form-control'>
                      <option value=" ">Select a Group</option>

                    </select>
                    <div className="mb-2">
                    <input type="submit" className='btn btn-success' value='Create' />
                    <Link to={"/contacts/list"} className="btn btn-dark ms-2">Cancel</Link>

                  </div>
                    

                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
         
      </section>
    </div>
  )
}

export default AddContact;