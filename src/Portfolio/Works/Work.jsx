import React from "react";
import "./works.css";


const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <TimelineItem
                    key={index}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                />
            ))}
        </div>
    );
};

const TimelineItem = ({ title, date, description }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="date">{date}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="circle" />
        </div>
    </div>
);

export default Timeline;
