import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Journey from "../components/Home/Journey"


const JourneyPage = () => (
  <Layout>
    <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>
    <div style={{backgroundColor:'#def2f1', height: '1300px',
      width: '100%'}}>
    <section>
      <div className="container" style={{padding: 'top right bottom left'}}>
        <h2 style={{textAlign: 'center'}}>Our Journey so far</h2>
      </div>
    </section>
    <section>
      <div className="container" style={{padding: 'top right bottom left'}} >
    <Journey/>
      </div>
    </section>
    <section>
      <div className="container" style={{padding: 'top right bottom left'}}>
        <h2 style={{textAlign: 'center'}}>And miles to go...</h2>
      </div></section></div>
  </Layout>
)

export default JourneyPage

