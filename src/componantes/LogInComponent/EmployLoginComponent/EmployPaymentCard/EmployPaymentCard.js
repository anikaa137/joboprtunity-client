import React from 'react'
import { Link } from "react-router-dom";

function EmployPaymentCard() {
    return (
        <div  class="container mt-5 pt-5">


<div class="row row-cols-1 row-cols-md-3 g-4  ">
  <div class="col">
    <div class="card h-100">

      <div class="card-body">
        <h5 class="card-title text-center">Basic</h5>
                <h2 class="card-text text-center">19.00 15 Days</h2>
                <p class="card-text text-center"> 15 Days Membership</p>
                <p class="card-text text-center"> 25 jobs posting</p>
                <p class="card-text text-center"> 30 featured jobs</p>
                <p class="card-text text-center"> 10 refresh jobs</p>
            <h6 class="card-text text-center"> No Download Resume Attach file</h6>
            <p class="card-text text-center"> Job displayed for 35 days</p>
            <p class="card-text text-center">  Featured Company</p>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/employ_form">   <button class=" ">BUY NOE</button></Link>

</div>
              </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">



      <div class="card-body">
        <h5 class="card-title text-center">PREMIUM</h5>
                <h2 class="card-text text-center">29.00 29 Days </h2>
                <p class="card-text text-center"> 50 jobs posting</p>
                <p class="card-text text-center"> 25 jobs posting</p>
                <p class="card-text text-center"> 30 featured jobs</p>
                <p class="card-text text-center"> 35 refresh jobs</p>
            <h6 class="card-text text-center"> No Download Resume Attach file</h6>
            <p class="card-text text-center"> Job displayed for 35 days</p>
            <p class="card-text text-center">  Featured Company</p>

                <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/employ_form">   <button class=" ">BUY NOE</button></Link>

</div>
              </div>
      </div>

  </div>
  <div class="col">
    <div class="card h-100">

    <div class="card-body">
        <h5 class="card-title text-center">PRO</h5>
                <h2 class="card-text text-center">49.00 55 Days</h2>
                <p class="card-text text-center"> 55 Days Membership</p>
                <p class="card-text text-center"> 30 jobs posting</p>
                <p class="card-text text-center"> 20 featured jobs</p>
                <p class="card-text text-center"> 10 refresh jobs</p>
            <h6 class="card-text text-center"> No Download Resume Attach file</h6>
            <p class="card-text text-center"> Job displayed for 55 days</p>
            <p class="card-text text-center">  Featured Company</p>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/employ_form">   <button class=" ">BUY NOE</button></Link>

</div>
              </div>
    </div>
  </div>

</div>
        </div>
    )
}

export default EmployPaymentCard;
