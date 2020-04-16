import React from 'react';
import {
    MdChevronLeft,
    MdChevronRight,
    MdSchedule,
    MdEventAvailable,
} from 'react-icons/md';
import { Container, Time } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="#fff" />
                </button>
                <strong className="white_text">May 30</strong>
                <button type="button">
                    <MdChevronRight size={36} color="#fff" />
                </button>
            </header>
            <ul>
                <Time past>
                    <strong>08:00</strong>
                    <span>Jane Doe</span>
                </Time>
                <Time available>
                    <strong>
                        09:00
                        <MdEventAvailable size={20} />
                    </strong>
                    <span>Available</span>
                </Time>
                <Time>
                    <strong>
                        10:00
                        <MdSchedule size={19} />
                    </strong>
                    <span>Alex Smith</span>
                </Time>
                <Time available>
                    <strong>
                        11:00
                        <MdEventAvailable size={20} />
                    </strong>
                    <span>Available</span>
                </Time>
            </ul>
        </Container>
    );
}
