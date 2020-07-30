import React from 'react'
import Title from '../Shared/Title'
import {Link } from 'gatsby'

export default function Contact() {
    return (
        <section className ="contact py-5">
            <Title title="contact us"></Title>
            <div className="container">
            <div className = "row">
                <div className ="col-10 col-sm-8 col-md-6 mx-auto">
                    <fieldset>
                        <legend>Details</legend>
                    <form action = "https://formspree.io/treenabhi@gmail.com" method ="POST">
                        <div className="form-group">
                            <label htmlFor ="name">
                                Name
                            </label>
                            <input type ="text" className="form-control"
                            name = "name"
                            id ="name"
                            placeholder ="FirstName LastName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor ="email">
                                Email
                            </label>
                            <input type ="text" className="form-control"
                            name = "email"
                            id ="email"
                            placeholder ="yourname@domain.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor ="phone">
                                Phone
                            </label>
                            <input type ="number" className="form-control"
                            name = "phone"
                            id ="phone"
                            placeholder ="9000000000"/>
                        </div>
                        <button type = "submit" className ="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
                    </fieldset>
                </div>
               {/*  <Link to = "/contactPage/">
            <button id ="submit" className= "btn text-uppercase btn-yellow" >Contact page</button>
               </Link> */}
            </div>
            </div>

        </section>
    )
}
