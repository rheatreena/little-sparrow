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
                    <div className="col-12  mx-auto text-center"  style={{textAlign:'center',paddingLeft: '50pt',
                      paddingRight: '50pt'}}>
                        <p className = "lead text-muted mb-5">
                          Little Sparrow is a strong team of 48 people with a vision to make a difference in our society.
                          We come from different spheres of life and from different parts of the world.
                          In September 2019, we read a newspaper article on the poor condition of Borail Upajati Kalyan Sangha
                          in Buniadpur, Uttar Dinajpur. Mr. Sukhumar Roy Chowdhury set up Borail Upajati Kalyan Sangha in 1971
                          and since then, he has been instilling basic education to hundreds of students belonging to socio-economic
                          backward classes of our society. The home hosts the students at its premises and takes care of their basic
                          necessities. We joined Sukhumar Babu in his quest of making a difference in the society in 2019 and since then,
                          we have been supporting the home and its students. At present, Little Sparrow focuses on two primary
                          areas - health and education. In the coming days, we plan to organize a health camp for kids. In addition,
                          we are deliberating on an idea of providing educational scholership to needy students.
                          Please support us in our quest of making our society better.
                        </p>
                        <Link to = "/contactPage/">
                            <button className="btn text-uppercase" style={{color: 'green', border: '1px solid'}}>Contact us</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}
