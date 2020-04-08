import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications, MdDone } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Container, Badge, NotificationsList, Notification } from './styles';
import api from '~/services/api';

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () =>
            !!notifications.find((notification) => notification.read === false),
        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('/notifications');

            const data = response.data.map((notification) => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { locale: enUS }
                ),
            }));

            setNotifications(data);
        }

        loadNotifications();
    }, []);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    async function handleMarkAsRead(id) {
        await api.put(`/notifications/${id}`);

        setNotifications(
            notifications.map((notification) =>
                notification._id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#fff" size={26} />
            </Badge>
            <NotificationsList visible={visible}>
                {notifications.map((notification) => (
                    <Notification
                        key={notification._id}
                        unread={!notification.read}
                    >
                        <p>{notification.content}</p>
                        <div>
                            <time>{notification.timeDistance}</time>
                            {!notification.read && (
                                <button
                                    type="button"
                                    className="link_btn white_text"
                                    onClick={() =>
                                        handleMarkAsRead(notification._id)
                                    }
                                >
                                    <MdDone color="#fff" size={14} />
                                    Mark as read
                                </button>
                            )}
                        </div>
                    </Notification>
                ))}
            </NotificationsList>
        </Container>
    );
}
