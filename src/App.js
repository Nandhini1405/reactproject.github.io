import React from 'react';
import './App.css';
import Home from './container/Home';
import Cards from './container/Cards/Cards';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Laravel from './container/pages/Laravel'
import Linux from './container/pages/Linux'
import Nginx from './container/pages/Nginx'
import Footer from './container/Footer';
import Crud from './container/pages/Laravel/Laravel-modules/Crud'
import Yajra from './container/pages/Laravel/Laravel-modules/Yajra'
import Pagination from './container/pages/Laravel/Laravel-modules/Pagination'
import Timezone from './container/pages/Linux/Timezone'
import MysqlPassword from './container/pages/Nginx/MysqlPassword'

function App() {
  return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Cards} />
          <Route path="/laravel" exact component={Laravel} />
          <Route path="/linux" exact component={Linux} />
          <Route path="/nginx" exact component={Nginx} />
          <Route path="/laravel/crud" exact component={Crud} />
          <Route path="/laravel/yajra" exact component={Yajra} />
          <Route path="/laravel/pagination" exact component={Pagination} />
          <Route path="/linux/timezone" exact component={Timezone} />
          <Route path="/nginx/mysql_password" exact component={MysqlPassword} />
          <Route path="/" exact component={Footer} />
        </div>
      </Router>
  );
}

export default App;
