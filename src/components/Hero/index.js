import React from 'react';
import Button from '../Button';
import './styles.scss';

function Hero() {
  return (
    <section className="hero section">
      <div>
        <h1 className="title">Hello, I am Faheem</h1>
        <p>
          I am a freelance JavaScript developer. I create Web Applications for
          businesses that works, saves time, organizes & automates boring stuff.
        </p>

        <Button href="mailto:hi@faheem.dev" type="link">
          Contact Me
        </Button>

        <Button href="mailto:hi@faheem.dev" type="link">
          Hire Me
        </Button>
      </div>
    </section>
  );
}

export default Hero;
