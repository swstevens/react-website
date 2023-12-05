import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProjectsPage from './projects'
import MainPage from './mainpage'

const HOME_ROUTE = '/'
const PROJECTS_ROUTE = '/projects'

export const RoutesManager = (data) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={HOME_ROUTE} element={<MainPage data={data} />}/>
                <Route exact path={PROJECTS_ROUTE} element={<ProjectsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesManager