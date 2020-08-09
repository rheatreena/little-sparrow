import React from 'react'
import Title from '../Shared/Title'

export default function Contact() {
    return (
        <section className ="contact py-5">
            <Title title="contact us"></Title>
            <div className="container"  >
            <div className = "row" style={{width:'100%', height:'500px'}}>
                <div className ="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action = "https://formspree.io/littlesparrowkol@gmail.com" method ="POST">
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
                            placeholder ="+91"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor ="message">
                                message
                            </label>
                            <textarea rows="4" cols="56" name="comment"  style={{border:"gray"}} placeholder = "Enter text here..." required=""></textarea>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <button type = "submit"  style={{color: 'green', border: '1px solid',margin:'auto'}}>Submit</button>

                        </div>
                    </form>
                </div>
            </div>
            </div>

        </section>
    )
}
