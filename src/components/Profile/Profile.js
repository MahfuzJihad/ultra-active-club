import React, { useState } from 'react';
import { addToDb } from '../../utilities/data';

import './Profile.css'

const Profile = (props) => {
    const { cart } = props;
    const [breakTime, setBreakTime] = useState([]);
    const handle = (e) => {
        setBreakTime(e.target.value);
        addToDb(e.target.value)
    }


    let totalTime = 0;
    for (const product of cart) {
        totalTime = totalTime + product.time;
    }

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
                <input type="button" value="20" onClick={handle}></input>
                <input type="button" value="25" onClick={handle}></input>
                <input type="button" value="30" onClick={handle}></input>
                <input type="button" value="40" onClick={handle}></input>
            </div>

            <h3>Exercise Details</h3>
            <div className='excercise-time'>
                <p>Exercise Time: {totalTime}</p>
            </div>
            <div className='excercise-time'>
                <p>Break Time:{breakTime} </p>
            </div>
            <button className='cpl-btn'>
                <p>Activity Complete</p>
            </button>
        </div>

    );
};

export default Profile;