import React from 'react'
import VideoPlayer from './VideoPlayer'
import SideBar from './SideBar'

export default function Home() {
    return (
        <div  className="home p-4">
            <div className="row">
                <div className="col-md-8">
                    <VideoPlayer />
                </div>
                <div className="col-md-4">

                    <SideBar />
                </div>
            </div>
            
        </div>
    )
}
