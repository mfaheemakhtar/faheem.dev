import React from 'react';
import Button from '../Button';
import './styles.scss';

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="title">Hello, I am Faheem</h1>
        <p>and I am a Full Stack JavaScript developer</p>

        <Button>Contact Me</Button>
        <Button>Hire Me</Button>
      </div>
    </section>
  );
}

export default Hero;
