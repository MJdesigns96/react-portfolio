import React from "react";
import { Outlet, Link } from 'react-router-dom';

const ProjectsPage = () => {
    return(
        <div>
            <div>Projects</div>
            <nav>
                <Link to="/projects/project1" >project1</Link>
                <Link to="/projects/project2" >project2</Link>
                <Link to="/projects/project3" >project3</Link>
            </nav>
            <Outlet />
        </div>
            
    )
}

export default ProjectsPage