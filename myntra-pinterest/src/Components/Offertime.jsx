

import React, { useState, useEffect } from 'react';

function Offertime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0); // set to midnight

            const diff = midnight - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTime(hours + "H:" + minutes + "M:" + seconds + "S");
        }, 1000);

        return () => clearInterval(timer); // cleanup the interval on component unmount
    }, []);

    return (
        <div className='w-full h-12 bg-blue-50 flex flex-col items-center justify-center'>
            <h1 className='text-gray-500'>Sale Ends In <span className='text-rose-400'>{time}</span></h1>
        </div>
    );
}

export default Offertime;