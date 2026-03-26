import React from 'react'
import ContactUs from '../Components/ContactUs'
import Breadcrumb from '../Components/Breadcrumb';

const Contact = () => {
  const calllog = {
    title:"Call To Us",
    address:"We are available 24/7, 7 days a week.",
    number:"+8801611112222"
  };
  const maillog ={
    title:"Write To US",
    content:"Fill out our form and we will contact you within 24 hours.",
    email1:"Emails: customer@exclusive.com",
    email2:"Emails: support@exclusive.com"
  }

 
  return (
    <main>
      <Breadcrumb/>
    <ContactUs calllog={calllog} maillog={maillog}/>
</main>
  )
}

export default Contact