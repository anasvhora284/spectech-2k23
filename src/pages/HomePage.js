import "../App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import CountDown from "../Componants/CountDown";
import SpectechAnimated from "../Assets/Images/tech-fauget-unscreen.gif";
import AboutUsIllustration from "../Assets/Images/aboutus-illustartion.png";
import ComingSoonImg from "../Assets/Images/ComingSoon.jpg";
import EventCard from "../Componants/EventCard.js";
import Header from "../Componants/Header";
import SponsorIs from "../Componants/Sponsors";
import { useNavigate } from "react-router-dom";
import { givenDateString } from "../constants";

const Home = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate("/events");
  };

  return (
    <>
      <Header />
      <div className="HomeDiv">
        <Container className="home" id="home">
          <div className="Welcome">
            <p style={{ fontSize: "4rem", color: "#332f79" }}>
              Welcome to <br></br>
              <span style={{ color: "#d06c16" }}> the Spec Tech </span>
              <br></br> 2<span style={{ color: "#d06c16" }}>K</span>23
            </p>
            <p style={{ fontSize: "1.3rem", color: "#cf6c18" }}>
              Get ready for a thrilling journey into the <br></br> future of
              technology at Spec Tech 2k23, <br></br> where innovation meets
              inspiration.
            </p>
          </div>
          <div className="LogoAnimation">
            <img
              src={SpectechAnimated}
              alt="animated Logo"
              className="AnimatedLogo"
            />
          </div>
        </Container>

        <Container className="CountDownContainer">
          <div className="EventStartsText">
            <p style={{ fontSize: "5rem", textShadow: "0 0 5px #ff0000" }}>
              The Event <br></br> Starts In!
            </p>
          </div>
          <div className="CountDownDiv">
            <CountDown
              style={{ fontSize: "2rem" }}
              targetDate={givenDateString}
            />
          </div>
        </Container>

        <Container className="About" id="about">
          <div className="AboutUsHeading">
            <div className="AboutUsbg">
              <p>About Us</p>
            </div>
          </div>
          <div className="AboutUsContant">
            <div className="AboutUsText">
              <div className="AboutusCard">
                <p className="CardText">
                  SPEC is a student centric, multidisciplinary, research and
                  holistic development oriented not for profit campus with a
                  view to promote welfare. Within a short span of time, since
                  2007 till date, it has emerged as a campus known for teaching,
                  learning & activities across the state of Gujarat. The campus,
                  spread across the sprawling lush green environment and a bit
                  away from noise and pollution of city, has number of
                  institutes, named after Iron man of India. All technically
                  professional courses are affiliated with Gujarat Technological
                  University.
                </p>
              </div>
            </div>
            <div className="AboutUsVector">
              <img
                className="AboutUsIllustration"
                src={AboutUsIllustration}
                alt="AboutUsIllustration"
              ></img>
            </div>
          </div>
        </Container>

        <Container className="EventsContainer" id="events">
          <div className="EventsHeading">
            <div className="Eventsbg">
              <p>Events</p>
            </div>
          </div>

          <div className="EventsCardsDiv">
            <div className="ThreeEventCards">
              <EventCard
                EventImg={ComingSoonImg}
                EventName="Web-O-Master"
                EventDiscription="In this Event We will give you a figma of the webpage you have make in given time."
              />
              <EventCard
                EventImg={ComingSoonImg}
                EventName="Bits & Bytes"
                EventDiscription="You are gonna Compete with other to build the best and fastest working PC assembling in this contest"
              />
              <EventCard
                EventImg={ComingSoonImg}
                EventName="Treasure Hunt"
                EventDiscription="Find the clues and hunt the treasure before other. The fastest Clue & Treasure Hunter get the prize."
              />
            </div>
          </div>
          <div className="ViewMoreEvents mt-5">
            <button
              onClick={handlePageChange}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View More Events
              </span>
            </button>
          </div>
        </Container>

        <Container className="SponsorsContainer" id="sponsors">
          <div className="Sponsorsbg">
            <p>sponsors</p>
          </div>

          <div className="SponsorsDiv flex flex-wrap justify-around gap-15">
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
          </div>
        </Container>

        <Container className="TeamsContainer" id="teams">
          <div className="Teamsbg">
            <p>Team</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
