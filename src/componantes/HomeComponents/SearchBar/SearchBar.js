import React from 'react'
import "./SearchBar.css"

function SearchBar() {
    return (
        <div class="container searchBar">
  <div class="mb-3 row g-4 p-4">

    <div class="col-md-4">
    <select class="form-select" id="inputGroupSelect01" defaultValue="Full time" >
      <option value="Full time">Full time</option>

    <option value="part time">part time</option>
    <option value="Contract">Contrac</option>

  </select>
   </div>
    <div class="col-md-4">
    <select class="form-select" id="inputGroupSelect01" defaultValue="Remote">
    <option value="Remote">Remote</option>
    <option value="In-office">In-office</option>
   </select>

                </div>
                <div class="col-md-4">
            <button class="search-submit-button">Search</button>
                </div>
  </div>
             </div>

    )
}

export default SearchBar;
