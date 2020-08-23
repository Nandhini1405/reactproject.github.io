import React from 'react'
import './laravel.css'
import { NavLink } from 'react-router-dom'


const Laravel = (props) => (
    <div style={{ background: '#d1ced4'}}>
        <div className="content">
            Laravel
        </div>
        <div>
            <div className="course">
                <h3>Yajra Datatable Package in Laravel</h3>
                <p>Datatables provides us quick search, pagination, ordering, sorting and etc. Datatables is basically jQuery plugins that allows you to add advanced interaction controls to your HTML tables data. Datatables also provide ajax for data searching and getting. you can give very quick layout for search and sorting using Datatables. You can also implement Datatables in your laravel application.</p>
                <NavLink to="/laravel/yajra">View</NavLink>
            </div>
            <div className="course">
                <h3>Laravel Pagination</h3>
                <p> Laravel 6 provide its own method for pagination. But if you are work on code PHP then you have to write long code for pagination and render view etc but in Laravel it is very simple</p>
                <NavLink to="/laravel/pagination">View</NavLink>
            </div>
        </div>
    </div>
);
export default Laravel;