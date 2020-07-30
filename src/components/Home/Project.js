import React, { Component } from 'react'
import Title from '../Shared/Title'
import Image from  'gatsby-image'
import {Link } from 'gatsby'
export default class Project extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: props.items.edges
        }
    }
    render() {
        if(this.state.items.length > 0){
            return (
                <section className ="project py-5">
                <div className = "container">
                    <Title title="current Project"/>
                    <div className = "row">
                        {/* <div className = "col">  */}
                           {this.state.items.map(({node}) => {
                               console.log("node " + node.id)
                               return (
                                <div key ={node.id} className =" col-8 col-md-2 my-3 d-flex mx-auto">
                                    <div>
                                        <Image fixed ={node.images[0].fixed} />
                                    </div>
                                    <div className = "flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h3 className = "mb-0">{node.title}</h3>
                                        </div>
                                        <p className ="text-muted">
                                            {node.description}
                                        </p>
                                    </div>

                                </div>
                               )
                           }
                        )
                           }

                       {/*  </div> */}
                    </div>
                    <div className="col-10 col-sm-8 mx-auto text-center">
                    <Link to = "/projects/">
                 {/* <button className="btn text-uppercase btn-yellow position-relative">Details</button> */}
                 </Link>
                 </div>
                </div>
            </section>
            )
        }
        return(
            <section className ="project py-5">
                <div className = "container">
                    <Title title="example Project"/>
                    <div className = "row">
                        <div className = "col-10 col-sm-6 mx-auto text-center text-capitalize">
                           <h1>No Project</h1>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}


