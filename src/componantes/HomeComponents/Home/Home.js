import React from 'react'
import Header from "../Header/Header"
import JobList from '../JobList/JobList'
import SearchBar from '../SearchBar/SearchBar'

function Home() {
    return (
        <div>
            <Header />
            <SearchBar />
             <JobList/>
        </div>
    )
}

export default Home;
