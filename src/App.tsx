import React from 'react';
import './App.scss';
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import Banner2 from './components/Banner2/Banner2';
import Banner3 from './components/Banner3/Banner3';
import Team from './components/Team/Team';
import ContactCard from './components/ContactCard/ContactCard';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Banner2/>
    <Banner3/>
    <Team/>
    <ContactCard/>
    <Footer/>
    </>
  );
}

export default App;