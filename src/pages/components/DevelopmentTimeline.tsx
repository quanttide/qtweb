import { useState } from 'react';
import './assets/CSS/DevelopmentTimeline.css';

interface Props {
    mainTitle: string;
    events: {
        date: string;
        name: string;
        description: string;
    }[];
}

export default function DevelopmentTimeline({ mainTitle, events }: Props) {
    const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedEvent(index);
    };

    return (
        <div className="development-timeline">
            <h1>{mainTitle}</h1>
            <div className="timeline">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-point ${selectedEvent === index ? 'selected' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {event.date}
                    </div>
                ))}
            </div>
            <div className="event-details">
                {selectedEvent !== null ? (
                    <div>
                        <h2>{events[selectedEvent].name}</h2>
                        <p>{events[selectedEvent].description}</p>
                    </div>
                ) : (
                    <p>Click on a date to see details</p>
                )}
            </div>
        </div>
    );
}
