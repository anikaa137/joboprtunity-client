import React from 'react'
import "./JobCard.css"

function JobCard({ jobs }) {

    const { Skill, companyName, employName, imageURL, jobDetailes, location,title,type,_id } = jobs
    return (
//         <div class="container">
//              <div class="col-md-12 mb-5 job-card">
//                  <div class="row g-5">
//                 <div class="col-md-3 pb-5">
//                 <img src={imageURL} alt="" />
//            </div>
//                  <div class="col-md-4 mt-3 pt-4" >
//                 <h4 class=' text-start'>{title}</h4>
//                 <h6 class=' text-start'>{employName}</h6>
//                 <p class=' text-start'>{companyName }</p>
//                 </div>
//                     <div class="col-md-4 pt-4">
//                         <div class="d-flex justify-content-evenly">

//                         <h6 class=' text-start'>{location}</h6>
//                         <h6 class=' text-start'>{type}</h6>
//                         <button>View</button>
// </div>
//                     </div>

//             </div>
//             </div>
//              </div>
<div class="container">
  <div class="row job-card">
    <div class="col mt-4">
        <img src={imageURL} alt="" />
    </div>
    <div class="col order-5 ">
    <h6 class=' text-start mt-5'>{location}</h6>
                         <h6 class=' text-start'>{type}</h6>
                          <button class="">View</button>
    </div>
    <div class="col order-1 mt-5">
    <h4 class=' text-start'>{title}</h4>
               <h6 class=' text-start'>{employName}</h6>
                  <p class=' text-start'>{companyName }</p>
    </div>
  </div>
</div>

    )
}

export default JobCard;
