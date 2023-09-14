import * as React from 'react'
import EventCard from '../Componants/EventCard';
import ComingSoonImg from '../Assets/Images/ComingSoon.jpg'
import '../App.css'

const EventsPage = () => {
    return (
        <div className='EventsPageDiv flex flex-col align-center'>
            <div className='EngineeringEvents block'>
                <div className='DepartmentHeadings mb-7'>
                    <span>Engineering Events</span>
                </div>
                <div className='EventsCardsDivs inline-flex align-between'>
                    <EventCard EventImg={ComingSoonImg} EventName='Web-O-Master1' EventDiscription='In this Event We will give you a figma of the webpage you have make in given time.' />
                    <EventCard EventImg={ComingSoonImg} EventName='Bits & Bytes2' EventDiscription='You are gonna Compete with other to build the best and fastest working PC assembling in this contest' />
                    <EventCard EventImg={ComingSoonImg} EventName='Treasure Hunt3' EventDiscription='Find the clues and hunt the treasure before other. The fastest Clue & Treasure Hunter get the prize.' />
                </div>
            </div>
        </div>
    );
}

export default EventsPage;