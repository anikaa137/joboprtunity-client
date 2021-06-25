import React from 'react'
import "./JobCard.css"
import { useHistory } from "react-router";

function JobCard({ jobs }) {
  let history = useHistory();

  const  jobHandler = (id) => {
      history.push(`/ViewJobs/${id}`);
      console.log("click");
  };

    const { Skill, companyName, employName, imageURL, jobDetailes, location,title,type,_id } = jobs
    return (

<div class="container">
  <div class="row job-card">
    <div class="col mt-4">
        <img src={imageURL} alt="" />
    </div>
    <div class="col order-5 ">
    <h6 class=' text-start mt-5'>{location}</h6>
                         <h6 class=' text-start'>{type}</h6>
                          <button class="job-card-btn" onClick={() =>  jobHandler(jobs._id)}>View</button>
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