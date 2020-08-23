import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Nginx = (props) => (
    <div style={{ background: '#d1ced4'}}>
        <div className="content">
            Nginx
        </div>
        <div>
            <div className="course-nginx">
                <h3>CHANGE MYSQL ROOT PASSWORD</h3>
                <p>In MySQL, by default, the username is root and there’s no password. If during the installation process, you accidentally put a password in and don’t remember, here is how to reset the password: Stop the MySQL server if it is running, then restart it with the –skip-grant-tables option.</p>
                <NavLink to="/nginx/mysql_password">View</NavLink>
            </div>
        </div>
    </div>
);
export default Nginx;