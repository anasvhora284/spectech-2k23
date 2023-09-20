import "../css/App.css";
import Container from "@mui/material/Container";
import CountDown from "../components/CountDown";
import SpectechAnimated from "../assets/Images/tech-fauget-unscreen.gif";
import AboutUsIllustration from "../assets/Images/aboutus-illustartion.png";
import ComingSoonImg from "../assets/Images/ComingSoon.jpg";
import EventCard from "../components/Event_card";
import Header from "../components/Header";
import SponsorIs from "../components/Sponsors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { givenDateString } from "../constants/index";
import Event_data from "../data/Event_data";
import TeamMember from "../components/Teams";
import Team_data from "../data/Team_data";

const Home = () => {
  const [currentTeamTab, setcurrentTeamTab] = useState("Tech");

  const handleTabTech = () => {
    setcurrentTeamTab("Tech");
  };

  const handleTabNonTech = () => {
    setcurrentTeamTab("non-Tech");
  };

  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate("/events");
  };

  return (
    <div className="MainHomecontainer">
      <Header />
      <div className="HomeDiv">
        <Container className="home" id="Home">
          <div className="Welcome">
            <p className="WelcomeText">
              Welcome to
              <span style={{ color: "#d06c16" }}> the Spec Tech </span>2
              <span style={{ color: "#d06c16" }}>K</span>23
            </p>
            <p className="GetReayText">
              Get ready for a thrilling journey into the future of technology at
              Spec Tech 2k23, where innovation meets inspiration.
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
            <p style={{}}>The Event Starts In!</p>
          </div>
          <div className="CountDownDiv">
            <CountDown
              style={{ fontSize: "2rem" }}
              targetDate={givenDateString}
            />
          </div>
        </Container>

        <Container className="About" id="About">
          <div className="AboutUsbg">
            <p>About Us</p>
          </div>
          <div className="AboutUsContant">
            {/* <div className="AboutUsText">
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
            </div> */}
            <div className="card">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
                <p className="card-inner-aboutus-text">
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

        <Container className="EventsContainer" id="Events">
          <div className="Eventsbg">
            <p>Events</p>
          </div>

          <div className="EventsCardsDiv">
            <div className="ThreeEventCards">
              {Event_data.map((categoryData, index) => (
                <div className="event-list mt-0 EventsCardsCatagoryDiv">
                  {categoryData.data.map((event, eventIndex) => (
                    <EventCard key={eventIndex} event={event} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="ViewMoreEvents mt-10">
            <button
              onClick={handlePageChange}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View More Events
              </span>
            </button>
          </div>
        </Container>

        <Container className="SponsorsContainer" id="Sponsors">
          <div className="Sponsorsbg">
            <p>sponsors</p>
          </div>

          <div className="SponsorsDiv">
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
            <SponsorIs imgSrc={ComingSoonImg} />
          </div>
        </Container>

        <Container className="TeamsContainer" id="Team">
          <div className="Teamsbg">
            <p>Team</p>
          </div>

          <div className="TeamsDiv flex flex-col items-center">
            <div className="TeamsTabDiv">
              <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2">
                  <div
                    onClick={handleTabTech}
                    className={`${
                      currentTeamTab === "Tech"
                        ? "text-white bg-blue-600"
                        : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }  inline-block px-4 py-3 rounded-lg cursor-pointer`}
                    aria-current="page"
                  >
                    Technical
                  </div>
                </li>
                <li class="mr-2">
                  <div
                    onClick={handleTabNonTech}
                    className={`${
                      currentTeamTab === "non-Tech"
                        ? "text-white bg-blue-600"
                        : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }  inline-block px-4 py-3 rounded-lg cursor-pointer`}
                  >
                    Non-Technincal
                  </div>
                </li>
              </ul>
            </div>

            <div className="TeamsCardsDiv">
              {currentTeamTab === "Tech" //TeamMembers cads starts here
                ? // Render tech team members
                  Team_data.filter(
                    (category) => category.catagory === "Technical"
                  ).map((category, index) => (
                    <div key={index}>
                      <div className="team-members flex ">
                        {category.data.map((member, memberIndex) => (
                          <TeamMember
                            key={memberIndex}
                            img={member.img}
                            name={member.name}
                            post={member.post}
                            LinkedIn={member.LinkedIm}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                : // Render non-tech team members
                  Team_data.filter(
                    (category) => category.catagory === "non-Technical"
                  ).map((category, index) => (
                    <div key={index}>
                      <div className="team-members flex">
                        {category.data.map((member, memberIndex) => (
                          <TeamMember
                            key={memberIndex}
                            img={member.img}
                            name={member.name}
                            post={member.post}
                            LinkedIn={member.LinkedIm}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
