import React from 'react'

export default function Footer() {
    return (
        <div className="footer py-3">
            <div className="container">
                <div className="row">
                <div className = "logo-credit">
                        <span>
                            <p>
                        <b>Logo Credits: </b>banasreemandal@gmail.com
                            </p>
                            </span>

                    </div>
                    <div className = "col-10 mx-auto col-md-6 text-black text-center text-capitalize">
                        <h5 style ={{textAlign:'center'}}>
                            all rights reserved &copy;Little Sparrow{new Date().getFullYear().toString()}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
