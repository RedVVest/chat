import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
    return (
        <div className='ws-home'>
            <div className="ws-container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default Home;