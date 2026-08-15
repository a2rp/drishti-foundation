import {
    FiArrowLeft,
    FiArrowRight,
    FiCalendar,
    FiClock,
    FiMapPin,
    FiUsers,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Styled } from "./styled";

const events = {
    "community-learning-session": {
        number: "01",
        title: "Community Learning Session",
        date: "24 Aug, 2026",
        time: "10:00 AM",
        location: "Bengaluru",
        type: "Learning Session",
        image: "https://picsum.photos/seed/drishti-event-learning/1600/1000",
        intro: "A focused community learning session designed to bring people together around practical knowledge, awareness and shared participation.",
    },

    "digital-awareness-workshop": {
        number: "02",
        title: "Digital Awareness Workshop",
        date: "31 Aug, 2026",
        time: "11:30 AM",
        location: "Bengaluru",
        type: "Workshop",
        image: "https://picsum.photos/seed/drishti-event-digital/1600/1000",
        intro: "A practical workshop focused on digital confidence, awareness and safer everyday use of modern technology.",
    },

    "volunteer-orientation": {
        number: "03",
        title: "Volunteer Orientation",
        date: "07 Sep, 2026",
        time: "05:00 PM",
        location: "Online",
        type: "Orientation",
        image: "https://picsum.photos/seed/drishti-event-volunteer/1600/1000",
        intro: "An introduction for people interested in participating, contributing and understanding how community-focused initiatives can work.",
    },

    "community-support-meet": {
        number: "04",
        title: "Community Support Meet",
        date: "14 Sep, 2026",
        time: "04:00 PM",
        location: "Bengaluru",
        type: "Community Meet",
        image: "https://picsum.photos/seed/drishti-event-community/1600/1000",
        intro: "A community-focused gathering for conversations around awareness, support, participation and practical opportunities.",
    },
};

const EventDetails = () => {
    const { eventSlug } = useParams();

    const event = events[eventSlug] || events["community-learning-session"];

    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="topBar">
                    <Link to="/events">
                        <FiArrowLeft />
                        Back to events
                    </Link>

                    <span>EVENT / {event.number}</span>
                </div>

                <div className="heroGrid">
                    <div className="heroContent">
                        <span className="eyebrow">{event.type}</span>

                        <h1>{event.title}</h1>

                        <p>{event.intro}</p>
                    </div>

                    <div className="eventInfo">
                        <div>
                            <FiCalendar />

                            <span>Date</span>

                            <strong>{event.date}</strong>
                        </div>

                        <div>
                            <FiClock />

                            <span>Time</span>

                            <strong>{event.time}</strong>
                        </div>

                        <div>
                            <FiMapPin />

                            <span>Location</span>

                            <strong>{event.location}</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="heroImage">
                <img src={event.image} alt={event.title} />

                <div className="imageOverlay" />

                <div className="imageLabel">
                    <span>Drishti Foundation</span>

                    <strong>
                        Learn.
                        <br />
                        Connect.
                        <br />
                        Participate.
                    </strong>
                </div>
            </section>

            <section className="detailsSection">
                <aside className="detailsAside">
                    <span>EVENT DETAILS</span>

                    <div className="asideMeta">
                        <div>
                            <FiCalendar />
                            <span>{event.date}</span>
                        </div>

                        <div>
                            <FiClock />
                            <span>{event.time}</span>
                        </div>

                        <div>
                            <FiMapPin />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </aside>

                <article className="detailsContent">
                    <p className="lead">
                        This event is designed to create a simple space for
                        useful learning, participation and open conversation.
                    </p>

                    <p>
                        Drishti Foundation believes that meaningful progress
                        becomes easier when people have access to information,
                        supportive networks and opportunities to participate.
                    </p>

                    <h2>What to expect</h2>

                    <p>
                        The session will focus on practical discussion,
                        accessible information and opportunities for attendees
                        to exchange ideas and experiences.
                    </p>

                    <div className="expectations">
                        <div>
                            <span>01</span>

                            <strong>Practical learning</strong>

                            <p>
                                Useful information presented in a simple and
                                understandable way.
                            </p>
                        </div>

                        <div>
                            <span>02</span>

                            <strong>Open discussion</strong>

                            <p>
                                Space for questions, observations and shared
                                experiences.
                            </p>
                        </div>

                        <div>
                            <span>03</span>

                            <strong>Community connection</strong>

                            <p>
                                Meet people interested in learning,
                                participation and positive action.
                            </p>
                        </div>
                    </div>

                    <h2>Who can participate</h2>

                    <p>
                        The event is open to people who are interested in
                        learning, community participation, digital awareness,
                        education or contributing to useful social initiatives.
                    </p>

                    <div className="participantBlock">
                        <FiUsers />

                        <div>
                            <span>OPEN PARTICIPATION</span>

                            <strong>
                                Curiosity and willingness to participate are
                                enough.
                            </strong>
                        </div>
                    </div>

                    <h2>How to join</h2>

                    <p>
                        If you would like to participate or want more
                        information about this event, contact Drishti Foundation
                        and mention the event name in your message.
                    </p>

                    <Link to="/contact" className="contactButton">
                        Contact us
                        <FiArrowRight />
                    </Link>
                </article>
            </section>

            <section className="closingSection">
                <span>MORE OPPORTUNITIES TO CONNECT</span>

                <div>
                    <h2>
                        Participation turns
                        <strong>ideas into progress.</strong>
                    </h2>

                    <Link to="/events">
                        View all events
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default EventDetails;
