import React from 'react'
import './pass.css'

const Mysql = (props) => (
    <div>
        <h3>CHANGE MYSQL ROOT PASSWORD</h3>
        <div className="main-pass">
            <h4>To Change MYSQL Password</h4>
            <p>Login in to (Adminer or phpmyadmin etc..) and click SQL commend on it and paste the following code</p>
            <pre>SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new_password')</pre>
        </div>
    </div>
);
export default Mysql;