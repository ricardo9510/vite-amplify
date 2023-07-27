import React, { useEffect, useState } from 'react';

const Hello: React.FC = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("http://testeb-env.eba-fhtwyh4g.us-east-1.elasticbeanstalk.com/welcome")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text()
            })
            .then(message => {
                setMessage(message);
            })
            .catch(error => {
                setMessage(`Fetch failed: ${error.message}`);
            });
    }, []);

    return (
        <div>{message}</div>
    );
}

export default Hello;

