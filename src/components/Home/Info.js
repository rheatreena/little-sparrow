import React from 'react'
import {Link } from 'gatsby'
import Title from "../Shared/Title"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Info() {
    return (
        <section className="py-5" style ={{backgroundColor:"#def2f1"}}>
            <div className="container">
                <Title title = "Our Story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className = "lead text-muted mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                         ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to = "/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}
