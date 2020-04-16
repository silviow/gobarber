/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useEffect } from 'react';
import {
    format,
    subDays,
    addDays,
    setHours,
    setMinutes,
    setSeconds,
    isBefore,
    isEqual,
    parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import en from 'date-fns/locale/en-US';
import {
    MdChevronLeft,
    MdChevronRight,
    MdSchedule,
    MdEventAvailable,
} from 'react-icons/md';
import api from '~/services/api';
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function Dashboard() {
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(
        () =>
            format(date, 'MMMM d', {
                locale: en,
            }),
        [date]
    );

    useEffect(() => {
        async function loadSchedule() {
            const response = await api.get('/schedule', {
                params: { date },
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const data = range.map((hour) => {
                const roundedDate = setSeconds(
                    setMinutes(setHours(date, hour), 0),
                    0
                );

                const compareDate = utcToZonedTime(roundedDate, timezone);

                return {
                    time: `${hour}:00`,
                    past: isBefore(compareDate, new Date()),
                    appointment: response.data.find((a) =>
                        isEqual(parseISO(a.date), compareDate)
                    ),
                };
            });

            setSchedule(data);
        }

        loadSchedule();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handlePrevDay}>
                    <MdChevronLeft size={36} color="#fff" />
                </button>
                <strong className="white_text">{dateFormatted}</strong>
                <button type="button" onClick={handleNextDay}>
                    <MdChevronRight size={36} color="#fff" />
                </button>
            </header>
            <ul>
                {schedule.map((hour) => (
                    <Time
                        key={hour.time}
                        past={hour.past}
                        available={!hour.appointment}
                    >
                        <strong>
                            {hour.time}
                            {!hour.appointment && !hour.past ? (
                                <MdEventAvailable size={20} />
                            ) : !hour.past ? (
                                <MdSchedule size={19} />
                            ) : (
                                ''
                            )}
                        </strong>
                        <span>
                            {hour.appointment
                                ? hour.appointment.user.name
                                : !hour.appointment && hour.past
                                ? '-'
                                : 'Available'}
                        </span>
                    </Time>
                ))}
            </ul>
        </Container>
    );
}
