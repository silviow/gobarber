import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdViewAgenda } from 'react-icons/md';
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo.svg';
import defaultAvatar from '~/assets/default_avatar.png';

export default function Header() {
    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <div>
                        <Link to="/dashboard" className="link_btn white_text">
                            <MdViewAgenda size={18} color="#fff" />
                            Dashboard
                        </Link>
                    </div>
                </nav>
                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong className="white_text">
                                {profile.name.split(' ', 1)}
                            </strong>
                            <Link to="/profile" className="link_btn white_text">
                                My profile
                            </Link>
                        </div>
                        <Link to="/profile">
                            <img
                                src={profile.avatar.url || defaultAvatar}
                                alt="Name"
                            />
                        </Link>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
