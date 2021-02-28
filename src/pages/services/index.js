import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1440px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }

  .header {
    padding: 30px;

    h1 {
      color: white;
      text-align: center;
      font-size: 3rem;
    }

    h4 {
      color: white;
      text-align: center;
      font-size: 2rem;
    }
  }

  .services {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .service {
      border-radius: 8px;
      width: 400px;
      height: 250px;
      margin: 20px 0;

      img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }

      &:hover {
        .overlay {
          @keyframes fadeIn {
            0% {
              opacity: 0%;
            }
            100% {
              opacity: 100%;
            }
          }

          h2 {
            display: none;
          }

          h5 {
            display: block;
            color: white;
            text-align: center;
            font-size: 1rem;
          }

          a {
            display: block;
            animation-name: fadeIn;
            animation-duration: 1s;
          }
        }
      }

      .overlay {
        animation-name: fade;
        animation-duration: 0.5s;
        background: rgba(0, 0, 0, 0.7);
        position: relative;
        left: 0;
        top: -254px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 15px;

        h2 {
          color: white;
          text-align: center;
          font-size: 2rem;
        }

        h5 {
          display: none;
        }

        a {
          display: none;
          background: white;
          color: black;
          padding: 5px;
          border-radius: 10px;
          font-size: 1.3rem;
          text-decoration: none;
          font-weight: 900;
        }
      }
    }
  }
`;

const Services = () => {
  const services = [
    {
      name: "Security Guard Services",
      description:
        "BRSC doesn't just consult, we serve. Are you interested in feelings of safety and being in a secure environment where threats to harm are handled by trained professionals? If so then look no further than BRSC security guard services. The national average of police response time is 14-16 minutes. This is good and we thank our police for their dedication and service. But if a threat looms at the door of your business or church, having trained guards to assess and handle the situation can waylay dangers and give you safety in those precarious 14-16 minutes.",
    },
    {
      name: "Security Operations Training",
      description:
        "Are you the type of person who wants to have a safe environment and people around who know what to do in an emergency rather than panic? Do you have people willing and ready to step up to a threat to your business, church or school? Then consider Security Operations Training from BRSC where we will teach you how to properly assess a threat, respond to a variety of emergency situations and direct others in a safe manner.",
    },
    {
      name: "Security Assessments",
      description:
        "How safe is your home? How easy would it be for a burglar to enter your business in the middle of the night? Would you like these questions and more answered? Contact BRSC for a Security Assessment and security professionals will assess the premises and give you feedback on the matter, suggestions for improvements and let you know what works well.",
    },
    {
      name: "Investigative Services",
      description:
        "Are you troubled by something, have an unsolved problem that needs a delicate touch? BRSC offers discrete, professional investigative services to help you find the answers.",
    },
    {
      name: "Awareness and Preparedness",
      description:
        "What do you do when you see two people break out in a fight? If a flash flood hits and water pours in how would you respond? BRSC offers training on a variety of topics to raise awareness and help you be prepared to handle the situation in a level-headed manner. Topics include but are not limited too: physical violence, sexual assault, active shooters, natural disasters and emergency response.",
    },
    {
      name: "Video Surveillance & Alarm Systems",
      description:
        "Looking for more security around the clock? BRSC offers sales and installation services of video surveillance equipment and alarm security systems. Get peace of mind knowing that your home, business or church is well equipped with tools designed to protect you in the event of a break in or burglary.",
    },
  ];

  return (
    <Container>
      <div className="header">
        <h1>Our Services</h1>
        <h4>
          Here are some of the professional services we provide for our clients:
        </h4>
      </div>
      <div className="services">
        {services.map((i) => {
          return (
            <div className="service">
              <img
                alt={i.name}
                src="https://picsum.photos/seed/picsum/200/300"
              />
              <div className="overlay">
                <h2>{i.name}</h2>
                <h5>{i.description}</h5>
                <Link to="/contact">Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Services;
