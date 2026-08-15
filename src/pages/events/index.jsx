import {
    FiArrowRight,
    FiArrowUpRight,
    FiCalendar,
    FiClock,
    FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { Styled } from "./styled";

const events = [
    {
        id: "01",
        date: "24 Aug, 2026",
        title: "Community Learning Session",
        location: "Bengaluru",
        time: "10:00 AM",
        image: "https://picsum.photos/seed/drishti-event-learning/1000/760",
        slug: "community-learning-session",
    },
    {
        id: "02",
        date: "31 Aug, 2026",
        title: "Digital Awareness Workshop",
        location: "Bengaluru",
        time: "11:30 AM",
        image: "https://picsum.photos/seed/drishti-event-digital/1000/760",
        slug: "digital-awareness-workshop",
    },
    {
        id: "03",
        date: "07 Sep, 2026",
        title: "Volunteer Orientation",
        location: "Online",
        time: "05:00 PM",
        image: "https://picsum.photos/seed/drishti-event-volunteer/1000/760",
        slug: "volunteer-orientation",
    },
    {
        id: "04",
        date: "14 Sep, 2026",
        title: "Community Support Meet",
        location: "Bengaluru",
        time: "04:00 PM",
        image: "https://picsum.photos/seed/drishti-event-community/1000/760",
        slug: "community-support-meet",
    },
];

const Events = () => {
    return (
        <Styled.Wrapper>
            <section className="heroSection">
                <div className="heroMeta">
                    <span>EVENTS</span>
                    <span>06 / FOUNDATION</span>
                </div>

                <div className="heroGrid">
                    <h1>
                        Meet.
                        <span>Learn.</span>
                        Participate.
                    </h1>

                    <div className="heroCopy">
                        <FiCalendar />

                        <p>
                            Events and community sessions designed to create
                            awareness, participation and meaningful connection.
                        </p>
                    </div>
                </div>
            </section>

            <section className="featuredEvent">
                <div className="featuredImage">
                    <img
                        src="https://picsum.photos/seed/drishti-event-featured/1500/950"
                        alt="Featured community event"
                    />

                    <div className="imageOverlay" />
                </div>

                <div className="featuredContent">
                    <span className="eyebrow">FEATURED EVENT</span>

                    <h2>
                        Community Learning
                        <span>Session</span>
                    </h2>

                    <div className="featuredMeta">
                        <div>
                            <FiCalendar />
                            <span>24 Aug, 2026</span>
                        </div>

                        <div>
                            <FiClock />
                            <span>10:00 AM</span>
                        </div>

                        <div>
                            <FiMapPin />
                            <span>Bengaluru</span>
                        </div>
                    </div>

                    <p>
                        A focused learning session designed to bring people
                        together around practical knowledge, awareness and
                        shared participation.
                    </p>

                    <Link to="/events/community-learning-session">
                        View event
                        <FiArrowRight />
                    </Link>
                </div>
            </section>

            <section className="eventsSection">
                <div className="sectionHeader">
                    <span>UPCOMING EVENTS</span>
                    <strong>{events.length} Events</strong>
                </div>

                <div className="eventsGrid">
                    {events.map((event) => (
                        <article className="eventCard" key={event.id}>
                            <Link
                                to={`/events/${event.slug}`}
                                className="eventImage"
                            >
                                <img src={event.image} alt={event.title} />

                                <span className="eventNumber">{event.id}</span>

                                <span className="eventAction">
                                    <FiArrowUpRight />
                                </span>
                            </Link>

                            <div className="eventContent">
                                <span className="eventDate">{event.date}</span>

                                <h3>
                                    <Link to={`/events/${event.slug}`}>
                                        {event.title}
                                    </Link>
                                </h3>

                                <div className="eventMeta">
                                    <span>
                                        <FiMapPin />
                                        {event.location}
                                    </span>

                                    <span>
                                        <FiClock />
                                        {event.time}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="closingSection">
                <div>
                    <span>PARTICIPATE</span>

                    <h2>
                        Progress grows
                        <strong>through participation.</strong>
                    </h2>
                </div>

                <Link to="/contact">
                    Get involved
                    <FiArrowUpRight />
                </Link>
            </section>
        </Styled.Wrapper>
    );
};

export default Events;
