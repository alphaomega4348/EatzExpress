import React from 'react';


const About = () => {
    const [isDark, setIsDark] = React.useState(true);

    const toggleDarkLight = () => {
        setIsDark(!isDark);
    }

    return (
        <div className={`about-container ${isDark ? 'dark' : 'light'}`}>
            <button onClick={toggleDarkLight} className="toggle-button">
                Switch to {isDark ? 'Light' : 'Dark'} Mode
            </button>
            <h1>About Our Food App</h1>
            <p>Our Food App is dedicated to providing the best food delivery service. We partner with a wide range of restaurants to deliver fresh, hot meals right to your doorstep.</p>
        </div>
    );
}

export default About;