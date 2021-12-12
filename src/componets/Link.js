import React from 'react'
import { Routes , Route , Navigate } from 'react-router';
import Result from './Result';

export default function Link() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Navigate to="search"/>}> </Route>
                <Route exact path ="/search" element={<Result />} />
                <Route exact path ="/images" element={<Result />} />
                <Route exact path = "/news" element={<Result />} />
                <Route exact path ="/videos" element={<Result />} />
            </Routes>
        </div>
    )
}
