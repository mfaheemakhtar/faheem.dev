import React from 'react';
import Button from '../Button';
import Image from '../Image';
import './styles.scss';

const LOGOS = [
  {
    alt: 'NodeJS',
    fileName: 'nodejs',
  },
  {
    alt: 'ReactJS',
    fileName: 'reactjs',
  },
  {
    alt: 'JavaScript',
    fileName: 'javascript',
  },
  {
    alt: 'MongoDB',
    fileName: 'mongodb',
  },
  {
    alt: 'AWS',
    fileName: 'aws',
  },
];

function Skills() {
  return (
    <section className="skills">
      <h2 className="h2">This is my primary stack</h2>

      <div className="skills__logos">
        {LOGOS.map(logo => (
          <Image
            alt={logo.alt}
            className="skills__logo"
            key={logo.fileName}
            source={`/logos/${logo.fileName}.png`}
            title={logo.alt}
          />
        ))}
      </div>

      <div className="services__button">
        <Button>Just {LOGOS.length} things!? Show me more.</Button>
      </div>
    </section>
  );
}

export default Skills;
