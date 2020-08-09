import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundBanner from "../components/Shared/BackgroundBanner"
import Info from '../components/Home/Info'
import GalleryPage from '../components/Home/GalleryPage'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default class Navbar extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 1000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading:false
    });
  };
  componentDidMount() {
    this.wait(1000);
    // this.fetchGitHub();
  }
 render() {
    console.log(this.state.loading)
   if (this.state.loading) return (
     <div className="loading">
       <div className="loader"></div>
     </div>
   );
   return(
     <Layout>
       <SEO title="Home"  keywords = {[`gatsby`,`application`,`react`]}/>

       <BackgroundBanner />

       <Info/>
       <GalleryPage/>
       {/* <Contact/> */}
     </Layout>
   )
 }
 }