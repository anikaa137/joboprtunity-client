import React from "react";
import "./Welcome.css";
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

        <div class="container">
            <div class="position-absolute top-0 start-50 translate-middle mt-5 p-4">
                <img src="http://themesitem.com/demos/html/jobortunity/jobortunity/images/home-page-logo.png" alt="" />
            </div>
    <div class="position-absolute top-50 start-50 translate-middle mt-5 pt-5">
    <div class="row row-cols-1 row-cols-md-2 g-5">
                <div class="col">
                    <div class="card h-100" onClick={jobHandler}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5xiAc82yz8tur2-UGTgA7h2hzgeYzcwBHw&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center" >JOb Seeker</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100" onClick={postHandler}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxqEe26ml32iuBI0xT1VFommgvQ3gVDarig&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Employer</h5>
                            <p class="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
    </div>


        </div>
    );
}

export default Welcome;
