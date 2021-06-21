import React from 'react'
import Header from "../Header/Header"
import JobList from '../JobList/JobList'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'

function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            <SearchBar />
             <JobList/>
        </div>
    )
}

export default Home;
