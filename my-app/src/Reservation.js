import React, { useEffect, useState } from 'react';

function Reservations({ userId }) {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:555/reservations/${userId}`)
            .then((response) => response.json())
            .then((data) => setReservations(data))
            .catch((error) => console.error('Error fetching reservations:', error));
    }, [userId]);

    return (
        <div>
            <h2>Your Reservations</h2>
            {reservations.length > 0 ? (
                <ul>
                    {reservations.map((res) => (
                        <li key={res.ID}>
                            <p>Car: {res.MAKE} {res.MODEL}</p>
                            <p>Down Payment: ${res.DOWN_PAYMENT}</p>
                            <p>Date: {res.CREATED_AT}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
    );
}

export default Reservations;
