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
            display: none;
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
          color: white;
          text-align: center;
          font-size: 1rem;
        }

        a {
          display: none;
          background: white;
          color: black;
          padding: 10px;
          border-radius: 10px;
          font-size: 1.5rem;
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
      name: "Corporate Security",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },

    {
      name: "Security Audits",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Security Assessment",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Training",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Investigative Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Work Place Violence Awareness",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Disaster Preparedness",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Executive Protection Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Video Surveillance",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Alarm Systems",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Security Guard Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Patrol Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Active Shooter Response",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Team Building Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Emergency Response",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
    },
    {
      name: "Church Security Services",
      description:
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
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
