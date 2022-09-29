import React from 'react';
import './Profile.css'

const Profile = ({ cart }) => {
    return (
        <div className='full-profile'>
            <div>
                <h3>Jihad Mahfuz</h3>
            </div>
            <div className='age-weight'>
                <p>Age: 22</p>
                <p>Weight: 51kg</p>
                <p>Height: 5.3</p>
            </div>
            <h3>Add a break</h3>
            <div className='time-option'>
                <p>30</p>
                <p>35</p>
                <p>40</p>
                <p>45</p>
            </div>

            <h3>Exercise Details</h3>
            <div className='excercise-time'>
                <p>Exercise Time: {cart.length}</p>
            </div>
            <div className='excercise-time'>
                <p>Break Time: </p>
            </div>
        </div>
    );
};

export default Profile;