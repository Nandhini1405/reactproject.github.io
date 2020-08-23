import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Linux = (props) => (
    <div style={{ background: '#d1ced4'}}>
        <div className="content">
            Linux
        </div>
        <div>
            <div className="course-linux">
                <h3>Procedure to change the Timezone</h3>
                <p>A time zone is a geographic region that has the same standard time. Typically the time zone is set during the installation of the operational system, but it can be easily changed at a later time.</p>
                <p>Using the correct time zone is essential for many systems related tasks and processes. For example, the cron daemon uses the system’s time zone for executing cron jobs. The time zone is also used for logs timestamps.</p>
                <NavLink to="/linux/timezone">View</NavLink>
            </div>
        </div>
    </div>
);
export default Linux;