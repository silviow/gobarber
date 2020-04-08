import React from 'react';
import { MdNotifications, MdDone } from 'react-icons/md';
import { Container, Badge, NotificationsList, Notification } from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#fff" size={26} />
            </Badge>
            <NotificationsList>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
                <Notification unread>
                    <p>You have a new appointment.</p>
                    <div>
                        <time>3 hours ago</time>
                        <button type="button" className="white_text">
                            <MdDone color="#fff" size={14} />
                            Mark as read
                        </button>
                    </div>
                </Notification>
            </NotificationsList>
        </Container>
    );
}
