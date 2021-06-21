import React from 'react'
import "./Welcome.css"
import { useHistory } from "react-router";


function Welcome() {
    let history = useHistory();

    const jobHandler = () => {
        history.push(`/home`);
        console.log("click");
    };
    const postHandler = () => {
        history.push(`EmployLogin`);
        console.log("click");
    };



    return (
        <div class="row g-3">
            <div class="col-md-6">
            <div class="col" >
            <div class="card h-100 serviceDetailesCard p-3" onClick={jobHandler}>
                <img
                    src={''}
                    class="card-img-top serviceDetailesImg"
                    alt="..."
                />
                <div class="card-body text-center">
                    <h5 class="card-title" style={{backgroundSize:"cover"}}>Job seeker</h5>
                    <h5 class="card-text">
find your dreem job
                    </h5>
                    </div>
                   <button
                        class="serviceDetailes-btn btn-brand rounded-pill mx-auto mb-5"style={{cursor:"pointer"}}
                        // onClick={() => serviceHandler(service._id)}
                    >
                        View  jobs
                </button>
                </div>
            </div>
            <div class="col-md-6">
            <div class="col" >
            <div class="card h-100 serviceDetailesCard p-3" onClick={postHandler}>
                <img
                    src={''}
                    class="card-img-top serviceDetailesImg"
                    alt="..."
                />
                <div class="card-body text-center">
                    <h5 class="card-title" style={{backgroundSize:"cover"}}>Employ</h5>
                    <h5 class="card-text">
                          Post a job
                    </h5>
                    </div>
                   <button
                        class="serviceDetailes-btn btn-brand rounded-pill mx-auto mb-5" style={{cursor:"pointer"}}
                        // onClick={() => serviceHandler(service._id)}
                    >
                        View Service
                </button>
                </div>
            </div>
                </div>
            </div>
            </div>
    )
}

export default Welcome;
