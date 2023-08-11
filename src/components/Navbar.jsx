import { signOut } from 'firebase/auth';
import React,{useContext} from 'react';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {

    const {currentUser} = useContext(AuthContext)

    const handleLogout = async () => {
        await signOut(auth);
        window.location.reload(); // Reload the page
    };

    return (
        <div className='ws-navbar'>
            <span className="ws-logo">West Chat</span>
            <div className="ws-user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;