// src/components/Section.js
import React from 'react';
import './Section.css';

const Section = ({ id, title, children }) => (
    <section className="section" id={id}>
        {title && <h2>{title}</h2>}
        {children}
    </section>
);

export default Section;
