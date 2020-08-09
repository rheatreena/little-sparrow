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
                    <div className = "row">
                       <div className = "col" style={{position: 'relative',left: '-100px'}}>
                           <Title title="current Projects"/>
                           {this.state.items.map(({node}) => {
                               return (
                                <div key ={node.id} className =" col-12  my-5 d-flex mx-auto">
                                    <ul className='list-group'><li className='list-group-item d-flex justify-content-between align-items-left'>
                                    <div>
                                        <Image fixed ={node.images[0].fixed} />
                                    </div>
                                    <div className = "flex-grow-1 px-5">
                                        <div className="d-flex justify-content-between">
                                            <h3 className = "mb-4">{node.title}</h3>
                                        </div>
                                        <p className ="text-muted">

                                            Some text written by Cicero that's used to fill spaces on
                                            graphical design and publishing before the actual words have been written.
                                            The reason why it is difficult to understand is to draw attention away from
                                            the words on a page and to focus it on the design instead.

                                        </p>
                                    </div></li></ul>

                                </div>
                               )
                           }
                        )
                           }

                       {/*  </div> */}
                    </div>
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


