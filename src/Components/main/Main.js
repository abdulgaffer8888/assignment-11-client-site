import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AuthProvider from '../../context/AuthProvider';
import Details from '../Details/Details';

import Home from '../Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Sharespages/header/Header';
import Footer from '../footer/Footer'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import Book from '../Book/Book';
import EventsP from '../Home/EventsP';
import MyBooking from '../Mybooking/MyBooking';
import ManageOrder from '../ManageOrder/ManageOrder';
import Trips from '../Trips/Trips';
import Admin from '../Admin/Admin';
const Main = () => {
    return (
        <div>
            <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/Events">
                       <EventsP></EventsP>
                    </Route>
                    <Route path="/details/:id">
                        <Details></Details>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <PrivateRoute path="/book/:id">
                        <Book
                        ></Book>
                    </PrivateRoute>
                    <Route path="/mybooking">
                        <MyBooking></MyBooking>
                    </Route>
                    <Route path="/manageorder">
                        <ManageOrder></ManageOrder>
                    </Route>
                   <Route path="/trips">
                   <Trips></Trips>
                   </Route>
                   <Route path='/admin'>
                        <Admin></Admin>
                    </Route>
                    <Route path='/login'>
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
            </AuthProvider>
        </div>
    );
};

export default Main;