import React from 'react'
import { Routes , Route , Navigate } from 'react-router';
import Result from './Result';

export default function Link() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Navigate to="Search"/>}> </Route>
                <Route exact path = {"/search"} element={<Result/>} ></Route>
                <Route exact path = {"/images"} element={<Result/>} ></Route>
                <Route exact path = {"/news"} element={<Result/>} ></Route>
                <Route exact path = {"/videos"} element={<Result/>} ></Route>
            </Routes>
        </div>
    )
}
