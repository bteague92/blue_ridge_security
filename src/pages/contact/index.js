import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;

  @media(max-width: 768px){
    flex-direction: column;
  }


  .contact-form{
    margin: 30px 0;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
      width: 100%;
    }

    form{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1{
        color: white;
      }

      label{
        color: white;
      }

      input{
        margin: 10px 0;
        width: 80%;
        padding: 5px;
        border-radius: 5px;
        background: rgba(0,0,0, .3);
        border: 1px solid grey;
        text-align: center;
      }

      textarea{
        width: 80%;
        margin: 10px 0;
        padding: 5px;
        border-radius: 5px;
        background: rgba(0,0,0, .3);
        height: 100px;
        border: 1px solid grey;
        text-align: center;
      }
    }
  }

  .info{
    width: 50%;

    @media(max-width: 768px){
      width: 100%;
    }

    h1{
      color: white;
      text-align: center;
      margin: 30px 0 0 0;
    }

    address{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 30px 0 0 0;

      p{
        color: white;
        font-size: 1.5rem;
      }
    }
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.value]: e.target.name
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted")
  }
  return (
    <Container>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="info">
        <h1>Address:</h1>
        <address>
          <p>PO Box 1716</p>
          <p>Taylorsville, NC</p>
          <p>US</p>
          <p>Phone: <a href="/">8283583228</a></p>
          <p>Email: <a href="/">services@blueridgenc.net</a></p>
        </address>
      </div>
    </Container>
  );
};

export default Contact;
