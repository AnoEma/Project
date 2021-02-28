import React from 'react';
import '../Inicial/styles.css';
import Container from '../Inicial/container/container';
import Footer from '../Inicial/footer/footer';
import Header from '../Inicial/header/header';


export default function InicialPage(){
    return(
        <>
        <Header/>
        <Container/>
        <Footer/>
        </>
    );
}