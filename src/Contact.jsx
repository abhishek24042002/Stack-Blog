import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Rapper className="section">
        <h2 className="common-heading">Contact Us</h2>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27841.603342613893!2d77.71722048677933!3d29.27644394295982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1264f2f028ad%3A0xef1ec900872d4c3b!2sKhatauli%2C%20Uttar%20Pradesh%20251201!5e0!3m2!1sen!2sin!4v1664884739136!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
        <div className="container">
          <div className="contact-form">
            <form action="#" method="POST" className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea name="message" cols="30" rows="6" placeholder="Send Message" required></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Rapper>
    </>
  );
};

const Rapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({theme}) => theme.colors.white};
            border: 1px solid ${({theme}) => theme.colors.btn};
            color: ${({theme}) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
