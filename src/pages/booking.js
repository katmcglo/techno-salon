import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form/form';
import classes from '../components/container/container.module.scss';



const BookingPage = () => (
  <Layout>
    <SEO title="Booking" />
    <div className={classes.Container}>
      <Form />
    </div>
      
  </Layout>
)

export default BookingPage;
