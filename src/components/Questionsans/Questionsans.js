import React from 'react';
import './Questionsans.css';

const Questionsans = () => {
    return (
        <div className='container'>
            <div>
                <h3>
                    1.How does react works?
                </h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h3>
                    2.Difference between props and state?
                </h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h3>
                    3. useEffect data load!
                </h3>
                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Questionsans;