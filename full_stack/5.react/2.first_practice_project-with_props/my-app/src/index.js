import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const news = [
    {
        title: "Scientists Discover New Species of Butterfly in Amazon Rainforest",
        date: "February 28, 2024",
        content: "Researchers have identified a new species of butterfly in the depths of the Amazon rainforest. The discovery highlights the incredible biodiversity of the region and underscores the importance of conservation efforts."
    },
    {
        title: "Tech Giant Unveils Revolutionary AI System for Medical Diagnosis",
        date: "February 25, 2024",
        content: "A leading technology company has introduced a groundbreaking artificial intelligence system capable of diagnosing a wide range of medical conditions with unprecedented accuracy. The new system is expected to revolutionize healthcare and improve patient outcomes."
    },
    {
        title: "Space Agency Plans Ambitious Mission to Explore Outer Solar System",
        date: "February 20, 2024",
        content: "In a bold new initiative, a space agency has announced plans to launch a mission to explore the outer reaches of the solar system. The ambitious project aims to uncover new insights into the origins of our cosmic neighborhood and shed light on the mysteries of the distant planets and moons."
    }
];

ReactDOM.render(<App news={news}/>, document.getElementById('root'));
reportWebVitals();