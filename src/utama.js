import React from 'react';
import {Routes, Route} from 'react-router-dom';


import Beranda from './beranda';
import Event from './event';
import Gallery from './gallery';

const utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
    </Routes>
)

export default utama;
