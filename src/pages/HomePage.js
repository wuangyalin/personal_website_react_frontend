import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Body from '../components/home/Body';


const HomePage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Header className="App-header" />
            <Body />
            <Footer className="App-Footer" />
        </React.Fragment>
    );
};

export default HomePage;