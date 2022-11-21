import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <NavLink>
                <Button>Get Started</Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* footer */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>STACK BLOG'S</h3>
              <p>
                It has become appallingly obvious that our technology has
                exceeded our humanity.
              </p>
            </div>

            {/* 2nd column */}

            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>

            {/* 3rd column */}
            <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="footer-social-icons">
                    <div>
                    <NavLink>
                    <FaFacebook className="icon"/>
                    </NavLink>
                    </div>
                    <div>
                    <NavLink>
                    <FaInstagram className="icon"/>
                    </NavLink>
                    </div>
                    <div>
                    <NavLink>
                    <FaYoutube className="icon"/>
                    </NavLink>
                    </div>
                </div>
            </div>

            {/* 4th column */}
            <div className="footer-contact">
                <h3>Calls Us</h3>
                <h3>+91 1112221110</h3>
            </div>
          </div>

          {/* bottom section */}
          <div className="footer-bottom-section">
            <hr/>
            <div className="container grid grid-two-column">
                <p>
                    @{new Date().getFullYear()} STACK BLOG'S. All Rights Reserved
                </p>
                <div>
                    <p>Deigned By Abhishek Kumar</p>
                </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: #fff;
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social-icons {
        display: flex;
        gap: 2rem;

        div {
            padding: 1rem;
            border-radius: 50%;
            border: 2px solid ${({theme}) => theme.colors.white};

            .icon {
                color: ${({theme}) => theme.colors.white};
                font-size: 2.4rem;
                position: relative;
                cursor: pointer;
            }
        }
    }

    .footer-bottom-section {
        padding-top: 6rem;

        hr {
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors.hr};
            height: 0.1px;
        } 
    }
  }
`;

export default Footer;
