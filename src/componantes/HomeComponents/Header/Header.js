import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div class="header-banner">
        <div class="container">
            <div class="row g-5 ">

                <div class="col-md-7 mt-5">

                        <div class="banner-text text-start mt-5 pt-5">
                        <h2 class=" mt-3 banner-title">Start your Dream</h2>
                        <h3 class=" mt-3 banner-title">job from Here</h3>
                        <p>Total 6,500+ Available jobs here, We are damn sure someone which fits you most. So, let grab the chance to get a dream job.</p>

                    </div>
                </div>
                <div class="col-md-5">
                    <img src="http://themesitem.com/demos/html/jobortunity/jobortunity/images/home-page-banner-img.png" class="img-fluid homerepairImg"  alt="job bord Img" />
                </div>
            </div>

        </div>
    </div>
    )
}

export default Header;
