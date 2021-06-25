import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./JobDetailes.css"
import { useHistory } from "react-router";

function JobDetailes() {
    let history = useHistory();
    const handleApply = () => {
        alert("Your application submitated succefully")
        history.push(`/home`);
    };
    const { id } = useParams()

    const [viewjob, setViewJob] = useState({});
console.log(viewjob)
useEffect(() => {
    fetch(`https://shielded-mesa-68080.herokuapp.com/viewJobs/${id}`)
        .then(res => res.json())
        .then(data => setViewJob(data))
}, [id])

            const {Skill, companyName, employName, imageURL, jobDetailes, location,title,type,_id } = viewjob
    return (
    <div class="container">
<div class="mt-5">
    <div class="clearfix">
                    <h2>{title}</h2>
                    <h5 class="mt-3 mb-5">{companyName}</h5>
                    <button class="apply-btn mb-5" onClick={handleApply}>APPLY</button>
  <img src={imageURL} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

  <p>
     {jobDetailes}
  </p>

  <p>
  {jobDetailes}
  </p>


</div>
        </div>
    </div>

    )
}

export default JobDetailes;
