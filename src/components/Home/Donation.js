import React  from "react"
import Title from "../Shared/Title"

export default function Donation() {
    return (
      <section className ="contact py-5">
        <div className="container">
          <Title title="Donation Details"></Title>
          <div className="card">
            <div className="card-header" style={{backgroundColor: '#14a098'}}>India Account</div>
            <div className="card-body" style ={{fontSize:'20px'}}>Account holder name: Tamal Bhattacharya<br/>
              Beneficiary Name: Barail Upojati Kalyan Sangha<br/>
              Bank: Axis Bank<br/>
              Branch: Shakespeare Sarani<br/>
              A/C Number: 914010026284621<br/>
              IFSC Code: UTIB0000005<br/>
            </div>
          </div>
        </div>
      </section>
    )

}
