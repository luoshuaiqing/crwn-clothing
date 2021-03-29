import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <span className='option' onClick={() => auth.signOut()}>
                    Sign Out
                </span>
                :
                <Link className='option' to='/authenticate'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);