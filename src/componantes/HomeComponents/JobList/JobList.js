import React, { useEffect, useState } from "react";
import JobCard from "../JobsCard/JobCard";

import "./JobList.css"


function JobList() {
    const [jobslist, setJoblist] = useState([]);
    console.log(jobslist)
    useEffect(() => {
        fetch("http://localhost:5000/joblist")
            .then((res) => res.json())
            .then((data) =>setJoblist(data));
    }, [setJoblist]);

    return (
        <div>
<div class="container mt-5">
            <h2 class="text-center m-5">Popular Jobs</h2>
            <div className="row row-cols-1 g-4 ">
                {setJoblist.length > 0 &&
                    jobslist.map((jobs) => (
                        <JobCard jobs={jobs} key={jobs._id}></JobCard>
                    ))}
            </div>
        </div>
        </div>
    )
}

export default JobList;
