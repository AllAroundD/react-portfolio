import React from 'react'
import "./style.css"

export const Home = () => {
    return (
        <div>
            <div className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">My Portfolio</h1>
                    <h3 className="mb-5">
                        <em>My Journey in Development</em>
                    </h3>
                    <a className="btn btn-primary btn-xl" href="/about">Find Out More</a>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    )
}
