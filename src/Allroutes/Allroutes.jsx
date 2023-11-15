import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home_register from '../Components/Home_register';
import Home_login from '../Components/Home_login';
import Forgotpassword from '../Components/Forgotpassword';
import Resetpage from '../Components/Resetpage';

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home_register/>} />
                <Route path="/login" element={<Home_login/>} />
                <Route path="/forgotpassword" element={<Forgotpassword/>} />
                <Route path="/resetpage" element={<Resetpage/>} />
            </Routes>
        </div>
    );
};

export default Allroutes;