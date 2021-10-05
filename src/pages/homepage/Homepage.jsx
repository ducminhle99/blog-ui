import React from 'react'
import Banner from '../../components/banner/banner'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./homepage.css"

export default function Homepage() {
    return (
        <>
            <Banner />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>

    )
}
