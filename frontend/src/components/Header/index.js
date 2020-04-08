import React from 'react';
import { Link } from 'react-router-dom';
import { MdViewAgenda } from 'react-icons/md';
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo.svg';

export default function Header() {
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
                            <strong className="white_text">Name</strong>
                            <Link to="/profile" className="link_btn white_text">
                                My profile
                            </Link>
                        </div>
                        <Link to="/profile">
                            <img
                                src="https://api.adorable.io/avatars/64/k@adorable.io.png"
                                alt="Name"
                            />
                        </Link>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
